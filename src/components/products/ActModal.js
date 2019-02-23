import React, { Component } from 'react'
import { createProduct, removeProduct, updateProduct } from '../../store/actions/productActions'

import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const ProdForm = (changes, def={title: '',content: ''}) =>
  <React.Fragment>
    <div className="field">
      <label className="label">Product Title</label>
      <input className="input" type="text" id='title' placeholder="Title" onChange={changes} defaultValue={def.title}/>
    </div>
    <div className="field">
      <label className="label">Product Content</label>
      <textarea id="content" className="textarea" rows="2" placeholder="Description" defaultValue={def.content} onChange={changes}></textarea>
    </div>
  </React.Fragment>;

class ActModal extends Component {
  state = {
    title: '',
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };
  componentDidMount() {
    if (this.props.cPrd && this.props.mType === 'edit') {
      let {title, content} = this.props.cPrd
      this.setState({title, content});
    }
  };
  handleSubmit = () => {
    const { mClose, cPrd, mType } = this.props;
    if (mType==='edit') {
      this.props.updateProduct(cPrd.id, this.state);
    } else if (mType==='del') {
      this.props.removeProduct(cPrd.id);
    } else {
      this.props.createProduct(this.state);
    }
    this.setState({
      title: '',
      content: ''
    })
    mClose('');
  }
  render() {
    const { auth, mClose, cPrd, mType } = this.props;
    // console.log('cPrd: ', cPrd);
    let titl, body, action;
    if (!auth.uid) return <Redirect to='/signin' />
    switch (mType) {
      case 'edit':
        titl = 'Edit Product';
        body = ProdForm(this.handleChange, cPrd);
        action = <button type="submit" className="button is-success" onClick={this.handleSubmit}>Save changes</button>;
        break;
      case 'del':
        titl = 'Confirm';
        body = (<div>
          <p>You are going to remove "{cPrd.title}".</p>
          <p>Come on, man, you sure about that?</p>
        </div>);
        action = <button type="submit" className="button is-danger" onClick={this.handleSubmit}>Remove</button>;
        break;
      default:
        titl = 'New Product';
        body = ProdForm(this.handleChange);
        action = <button type="submit" className="button is-success" onClick={this.handleSubmit}>Create</button>;
        break;
    }

    return (
      <div className={mType !== '' ? "modal is-active" : "modal"} sdata={mType}>
        <div className="modal-background" onClick={() => mClose('')}></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">
              {titl}</p>
            <button className="delete" aria-label="close" onClick={() => mClose('')}></button>
          </header>
          <section className="modal-card-body">
            <form>
              {body}
            </form>
          </section>
          <footer className="modal-card-foot">
            {action}
            <button className="button" onClick={() => mClose('')}>Cancel</button>
          </footer>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProduct: (product) => dispatch(createProduct(product)),
    updateProduct: (id, product) => dispatch(updateProduct(id, product)),
    removeProduct: (id) => dispatch(removeProduct(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActModal)
