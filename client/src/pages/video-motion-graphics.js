import React from 'react';
import "../styles/pages/video-motion-graphics.scss";
import ProductImage from "../assets/production/Portfolio-Book.jpeg";
import anime from 'animejs';
import * as R from 'ramda'



const Product = () => {
	return (
		<div className='product'>
		<div className="page">
		<div className="container">
      		<div className="row">
			<section className="career-heading">
			<p className="item-depart">VIDEO MOTION GRAPHICS</p>
            <h2 className="item-title">EXPLAINER / 2D / 3D ANIMATION</h2>
            <p className="item-description">
            For portraying your brand’s message, animated videos are the best visual products to utilize them. Animated videos grab audience attention, engage them to watch the complete video. 
            Zeroland will provide you free consultation for guiding about the suitable choice from the motion graphics’ types. We have produced tons of animated and motions graphics for our clients. We have complete in-house graphics and production system.
		    </p>
      		</section>
      		</div>
    	</div>
		</div>
		</div>
	);
};

const { map, is, contains, curry, __, prop, equals, pipe, find, ifElse, F, identity } = R
const cloneChildren = (children, props) => React.Children.map(children, child => <child.type {...child.props} {...props} />)
const Head = ({ children, ...props }) => cloneChildren(children, props)
const Content = ({ children, ...props }) => cloneChildren(children, props)

const pickFromRect = rect => {
  const { width, height, top, left } = rect
  return { width, height, x: left, y: top }
}

const _findChildren = curry((component, children) => find(pipe(prop('type'), equals(component)))(children))
const findChildrenOr = curry((val, component, children) => ifElse(is(Array), _findChildren(component), val)(children))
const findChildren = findChildrenOr(F)
const findChildrenOrIdentity = findChildrenOr(identity)

const getLastPositionStyles = ({ maxWidth, maxHeight }) => {
  const mW = maxWidth > window.innerWidth ? window.innerWidth : maxWidth
  const mH = maxHeight > window.innerHeight ? window.innerHeight : maxHeight

  return {
    width: mW,
    height: mH,
    x: window.innerWidth / 2 - mW / 2,
    y: window.innerHeight / 2 - mH / 2
  }
}

const states = {
  IDLE: 'IDLE',
  OPEN: 'OPEN',
  OPENED: 'OPENED',
  CLOSE: 'CLOSE',
  IMMEDIATELY_CLOSE: 'IMMEDIATELY_CLOSE'
}

const openState = [ states.OPEN, states.OPENED, states.CLOSE, states.IMMEDIATELY_CLOSE ]
// const afterOpenState = [ states.OPENED, states.CLOSE ]
const closingState = [ states.CLOSE, states.IMMEDIATELY_CLOSE ]
const isActiveState = contains(__, openState)
// const isAfterOpenState = contains(__, afterOpenState)
const isClosingState = contains(__, closingState)
const isOpenedState = equals(states.OPENED)

class Modal extends React.Component {
  static Head = Head
  static Content = Content

  state = {
    styles: {},
    state: states.IDLE
  }

  constructor(props) {
    super(props)

    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
    this.createProps = this.createProps.bind(this)
    this.closeDoneCallback = this.closeDoneCallback.bind(this)
    this.openDoneCallback = this.openDoneCallback.bind(this)

    this.clone = React.createRef()
    this.content = React.createRef()
  }

  openDoneCallback() {
    const to = getLastPositionStyles(this.props)
    this.setState({
      state: states.OPENED,
      styles: {
        maxWidth: to.width,
        height: to.height,
        left: '50%',
        top: '70%',
        transform: 'translate3d(-50%, -50%, 0)'
      }
    })
  }

  closeDoneCallback() {
    this.setState({
      state: states.IDLE,
      styles: {},
      bodyStyles: {}
    })
  }

  setStartData(state, cb) {
    const cloneRect = pickFromRect(this.clone.current.getBoundingClientRect())
    const rect = pickFromRect(this.content.current.getBoundingClientRect())

    const styles = {
      maxWidth: rect.width,
      height: rect.height,
      top: 0,
      left: 0,
      transform: `translate3d(${rect.x}px, ${rect.y}px, 0)`
    }

    this.setState({ ...state, cloneRect, rect, styles }, cb)
  }

  openAnimation = () => {
    const { rect, state } = this.state

    if (state !== states.OPEN) return

    const to = getLastPositionStyles(this.props)

    anime({
      targets: this.content.current,
      maxWidth: to.width,
      height: to.height,
      translateX: [ rect.x, to.x ],
      translateY: [ rect.y, to.y ],
      duration: this.props.ms,
      baseFrequency: 0,
      complete: this.openDoneCallback,
      easing: 'easeInQuad'
    });
  }

  open() {    
    if (this.state.state !== states.IDLE) return
    this.setStartData({ state: states.OPEN }, this.openAnimation)
  }

  closeAnimation = () => {
    const { cloneRect: to, rect } = this.state

    anime({
      targets: this.content.current,
      maxWidth: to.width,
      height: to.height,
      translateX: [ rect.x, to.x ],
      translateY: [ rect.y, to.y ],
      duration: this.props.ms,
      baseFrequency: 0,
      complete: this.closeDoneCallback,
      easing: 'easeOutQuad'
    })
  }

  close() {
    if (this.state.state !== states.OPENED) return

    this.setStartData(undefined, this.closeAnimation)
  }

  createProps(Component, props) {
    return {
      ...Component.props,
      modal: {
        ...props,
        isOpen: isActiveState(this.state.state),
        close: this.close
      }
    }
  }

  renderClone() {
    const Head = findChildrenOrIdentity(Modal.Head, this.props.children)

    return Head && isActiveState(this.state.state)
      ? <Head.type {...this.createProps(Head)}/>
      : null
  }

  renderHead() {
    const Head = findChildrenOrIdentity(Modal.Head, this.props.children)

    return Head
      ? <Head.type {...this.createProps(Head, { original: true })}/>
      : null
  }

  renderContent() {
    const Content = findChildren(Modal.Content, this.props.children)

    return Content && isOpenedState(this.state.state)
      ? <Content.type {...this.createProps(Content)}/>
      : null
  }

  getBackgroundStyle() {
    return {
      transition: `opacity ${this.props.ms / 4}ms ease-in-out`
    }
  }

  getContentStyle() {
    return {
      ...this.state.styles,
      transition: `box-shadow ${this.props.ms}ms ease-in-out`
    }
  }

  getContaninerClassNames() {
    const { state } = this.state
    return [
      'transform-modal__container',
      isActiveState(state) ? 'transform-modal__container--open' : '',
      isClosingState(state) ? 'transform-modal__container--closing' : '' 
    ].join(' ')
  }

  render() {
    return (
      <div className='transform-modal' {...this.props}>
        <div ref={this.clone}>
          {this.renderClone()}
        </div>
        <div className={this.getContaninerClassNames()}>
          <div
            className='transform-modal__background'
            onClick={this.close}
            style={this.getBackgroundStyle()}
          />
          <div
            className='transform-modal__content'
            style={this.getContentStyle()}
            onClick={this.open}
            ref={this.content}
          >
            {this.renderHead()}      
            {this.renderContent()}
          </div>
        </div>
      </div>
    )
  }
}

const images = [
  {
    bg: ProductImage,
    title: 'Explainer Videos',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.'
  },
  {
    bg: 'https://images.unsplash.com/photo-1485286162995-aa63d31c06cb?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=edb0ee9e83e720444637907175b1b521',
    title: '2D Animation',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.'
  },
  {
    bg: ProductImage,
    title: '3D Animation',
    text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.'
  }
]

const ImageHead = ({ title, bg, modal: { isOpen, original, close } }) => (
  <div className={`image ${isOpen & original ? 'image--active' : ''}`} style={{ }}>
    <div className='image__bg' style={{ backgroundImage: `url(${bg})` }}/>
    <div className='image__content'>
      {
        isOpen & original
          ? <button className='image__close' onClick={close}>&#10006;</button>
          : null
      }
      <h2>{title}</h2>
    </div>
  </div>
)

const ImageContent = ({ title, text }) => (
  <div className='image-content'>
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
)

const ImageModal = item => (
  <div className='grid__item'>
    <Modal
      maxWidth={700}
      maxHeight={500}
      ms={300}
    >
      <Modal.Head>
        <ImageHead {...item}/>
      </Modal.Head>
      <Modal.Content>
        <ImageContent {...item}/>
      </Modal.Content>
    </Modal>
  </div>
)

const ImageModalList = ({ images }) => map(ImageModal, images)

const Layout = ({ children }) => (
  <React.Fragment>
    {children}
  </React.Fragment>
)

const Popup = () => (
  <Layout>
    <div className='grid-images'>
      <ImageModalList images={images}/>
    </div>
  </Layout>
)


  

const Video = () => <>
<div className="page">
<div className="container">
    <div className="row">
	<Product />
    </div>
</div>
</div>
<div className="row">
<Popup/>
</div>
</>;

export default Video;
