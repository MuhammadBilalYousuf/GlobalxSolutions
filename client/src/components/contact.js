import React from 'react';
import "../styles/components/contact.scss";
import anime from "animejs";
import axios from 'axios';

const Card = ({ button, description, minidescription }) => {
  return (
      <div className="contact-StyledCard">
      <h2>{description}</h2>
      </div>
  );
}

class Approach extends React.Component {
    constructor(){
        super()
        this.state = {
        isSending: false,
        anim: false,
        name: '',
        email: '',
        message: ''
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value })
      }
      validateForm = toggle => {
        const { anim, isSending } = this.state;
        if (anim === false && isSending === false) {
          console.log('hi')
          toggle
            ? anime({
                targets: ["#rectwrap rect"],
                strokeDashoffset: [anime.setDashoffset, 0],
            opacity: [{
              value:1,
              duration: 50
            }],
                easing: "easeOutQuad",
                duration: 650
              })
            
            : anime({
                targets: ["#rectwrap rect"],
                strokeDashoffset: [0, anime.setDashoffset],
                easing: "easeOutQuad",
                duration: 700
              });
        }
      };
      timeline = () => {
        const moo = () => {
          this.setState({ anim: false });
        };
        let tl = anime.timeline({
          easing: "easeInOutSine",
          changeComplete: function() {
            moo();
          }
        });
        tl.add({
          targets: ".inp",
          translateX: "100%",
          opacity: [1, 0],
          easing: "easeInOutSine",
          duration: 350,
          delay: (el, i) => 150 * i
        })
          .add({
            targets: "#submit",
            outlineWidth: "0px",
            duration: 0,
            easing: "easeInOutSine"
          })
          .add({
            targets: ["#rectwrap rect"],
            opacity: 0,
            easing: "easeOutQuad",
            duration: 100
          })
          .add({
            targets: ".siz",
            translateY: "60px",
            duration: 250
          })
          .add({
            targets: ".siz",
            translateY: "-600px",
          easing: "easeInQuad",
            duration: 500
          })
          .add({
            targets: ".siz",
            opacity: [1, 0],
            duration: 200
          });
      };
      reverseAnim = () => {
        const moo = () => {
          this.setState({ anim: false });
        };
        this.setState(
          {
            isSending: false,
            anim: true,
          },
          () => {
            let tl = anime.timeline({
              easing: "easeInOutSine",
              changeComplete: function() {
                moo();
              }
            });
            tl.add({
              targets: ".inp",
              translateX: "0%",
              opacity: [0, 1],
              easing: "easeInOutSine",
              duration: 350,
              delay: (el, i) => 150 * i
            })
              .add({
                targets: ".siz",
                translateY: "0%",
                translateX: "0%",
                duration: 0
              })
              .add({
                targets: "#submit",
                outlineWidth: "1px",
                duration: 300,
                easing: "easeInOutSine"
              })
              .add({
                targets: ".siz",
                opacity: [0, 1],
                duration: 300
              })
            .add({
              targets: ["#rectwrap rect"],
              opacity: [0],
              strokeDashoffset: [0],
              duration: 100
            })
          }
        );
      };
      handleSubmit = e => {
      e.preventDefault()
    
      const { name, email, message } = this.state
    
      const form =  axios.post('/api/form', {
        name,
        email,
        message
      })
      console.log(form);
    this.setState({ anim: true, isSending: true }, () => {
    });
    this.timeline();
    
    document.getElementById("contactform").reset();
    }
    render() {
      const { isSending, anim } = this.state;
      if (anim === false && isSending === false) {
        console.log("Message Send Successfully")
      }
      return (
          <form id="contactform" onSubmit={this.handleSubmit}>
                    {isSending && anim === false && (
                    <div id="update">
                      <p>Your message is on it's way!</p>
                      <button id="btn" onClick={this.reverseAnim}>
                        Send another
                      </button>
                    </div>
                    )}
                    <input
                      className="inp"
                      type="text"
                      placeholder="Your Name"
                      name="name"
                      onChange={this.handleChange}
                    />
                    <input
                      className="inp"
                      type="email"
                      placeholder="Your Email"
                      name="email"
                      onChange={this.handleChange}
                    />
                    <textarea
                      className="inp"
                      placeholder="How we can help you?"
                      name="message"
                    onChange={this.handleChange}
                    />
                    <button
                      id="submit"
                      type="submit"
                      onMouseEnter={() => this.validateForm(true)}
                      onMouseLeave={() => this.validateForm(false)}
                    >
                    <svg width="100%" height="100%" id="rectwrap">
                      <defs>
                      <linearGradient id="linear-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#6AC4DB" stopOpacity="1" />
                        <stop offset="100%" stopColor="#418EEA" stopOpacity="1" />
                      </linearGradient>
                      </defs>
                      <rect
                        width="100%"
                        height="100%"
                        fill="none"
                        strokeWidth="3"
                        stroke="url(#linear-gradient)"
                        strokeDasharray="5000"
                        strokeDashoffset="5000"
                      />
                    </svg>
                    <div className="siz">
                      <svg id="Capa_1" height="30" viewBox="0 0 512.056 512.056" width="30" xmlns="http://www.w3.org/2000/svg" fill="#6AC4DB">
                          <path d="m350.038 120.265c-7.206-36.687-27.738-70.157-57.939-92.992l-36.071-27.273-36.071 27.272c-30.201 22.835-50.733 56.305-57.939 92.992h188.02z"/>
                          <path d="m394.777 252.144v151.096h77.609v-69.027z"/>
                          <path d="m337.633 221.387c-11.732 0-21.277 9.545-21.277 21.278v145.279h48.422v-145.279c0-11.732-9.545-21.278-21.277-21.278z"/>
                          <path d="m195.701 242.665c0-11.732-9.545-21.278-21.277-21.278h-5.867c-11.732 0-21.277 9.545-21.277 21.278v145.279h48.422v-145.279z"/>
                          <path d="m117.279 252.144-77.609 82.069v69.027h77.609z"/>
                          <path d="m286.355 417.944v-175.279c0-28.275 23.003-51.278 51.277-51.278h5.867c3.213 0 6.353.311 9.403.879v-42.001h-193.75v42.001c3.051-.568 6.19-.879 9.403-.879h5.867c28.274 0 51.277 23.003 51.277 51.278v175.279h-54.474c-2.706 12.642-2.828 26.509 3.811 38.389l4.293 7.683h25.264c5.605 13.589 18.466 35.112 45.957 45.893l5.477 2.148 5.477-2.148c27.491-10.781 40.352-32.303 45.957-45.893h25.264l4.294-7.683c6.638-11.88 6.516-25.747 3.81-38.389z"/>
                          </svg>
                    </div>
                    </button>
                    </form>
      );
    }
}


const Box = () => {
  var { one } = cardDescriptions;
  return (
     <section className="contact">
      <div className="container">
      <div className="contact-StyledContainer">
      <Card className="first-card" description={one} />
      <Approach />
      </div>
      </div>
    </section>
  );
};

var cardDescriptions = {
  one:
    "Get in touch with us?",
};

const Solutions = () => {
  return (
    <>
    <Box />
    <br></br>
    </>
  );
};

export default Solutions;
