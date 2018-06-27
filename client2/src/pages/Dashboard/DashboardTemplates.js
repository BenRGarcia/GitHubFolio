import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUserInfo, editUserInfo } from '../../store/store';
import { bindActionCreators } from "redux";

const style = {
  navtabs: {
    border: 'none'
  },
  navItem: {
    border: '1px solid #ddd',
    borderRadius: '0',
    color: 'initial',
    textDecoration: 'none'
  },
  navItemActive: {
    backgroundColor: '#28314B',
    color: '#fff',
    border: '1px solid #ddd',
    borderRadius: '0',
    textDecoration: 'none'
  }
};

class DashboardTemplates extends Component {
  state = {
    chosenTemplate: '',
    viewingTemplate: 'stylized'
  };

  componentDidMount() {
    this.props.fetchUserInfo()
  }

  componentWillReceiveProps(nextProps) {
    const { chosenTemplate } = nextProps.userInfo
    if (chosenTemplate) {
      this.setState({ chosenTemplate })
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    const nextState = { ...this.state }
    nextState.chosenTemplate = this.state.viewingTemplate
    this.props.editUserInfo(nextState)
  };

  handleChange = template => {
    this.setState({
      viewingTemplate: template
    })
  };

  render() {
    return (
      <div className="row" style={{ minHeight: '100vh' }}>
        <div className="col d-flex justify-content-center align-items-start">
          <div className="flex-fill mt-4">
            <nav className='mb-3'>
              <div
                className="nav nav-tabs"
                style={style.navtabs}
                id="nav-tab"
                role="tablist"
              >
                <a
                  onClick={() => this.handleChange('stylized')}
                  className="nav-item nav-link active py-1 px-5"
                  style={this.state.viewingTemplate === 'stylized' ? style.navItemActive : style.navItem}
                  id="nav-stylized-tab"
                  data-toggle="tab"
                  href="#stylized"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  Stylized
                </a>
                <a
                  onClick={() => this.handleChange('minimalist')}
                  className="nav-item nav-link py-1 px-5"
                  style={this.state.viewingTemplate === 'minimalist' ? style.navItemActive : style.navItem}
                  id="nav-minimalist-tab"
                  data-toggle="tab"
                  href="#minimalist"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  Minimalist
                </a>
              </div>
            </nav>
            <div
              className="tab-content"
              id="nav-tabContent"
            >
              <button
                onClick={this.handleSubmit}
                type='button'
                className='btn btn-outline-dark mb-1'
                disabled={this.state.viewingTemplate === this.state.chosenTemplate}
              >
                {
                  this.state.viewingTemplate === this.state.chosenTemplate
                  ?
                  'Chosen!'
                  :
                  'Choose this template instead'
                }
              </button>
              <div
                className="tab-pane fade show active"
                id="stylized"
                role="tabpanel"
                aria-labelledby="nav-stylized-tab"
                >
                <img
                  className='img-fluid'
                  src={require('../../images/stylized-temp.png')} alt="stylized template example"
                />
                </div>
              <div
                className="tab-pane fade"
                id="minimalist"
                role="tabpanel"
                aria-labelledby="nav-minimalist-tab"
                >
                <img
                  className='img-fluid'
                  src={require('../../images/minimalist-temp.png')} alt="stylized template example"
                />
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { userInfo: state.userInfo };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchUserInfo, editUserInfo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardTemplates);
