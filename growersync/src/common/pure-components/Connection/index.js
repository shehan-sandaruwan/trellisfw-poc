import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import styles from './index.module.css'
import svgIncomingConnection from '../../svg/incoming.svg'

import svgABC from '../../svg/domains/AbcAudits.svg'
import svgGrowerSync from '../../svg/domains/GrowerSync.svg'
import svgRetailFresh from '../../svg/domains/RetailFresh.svg'
import svgPSP from '../../svg/domains/PspPerfection.svg'
import svgAuditorMining from '../../svg/domains/AuditorMining.svg'
import svgDistributing from '../../svg/domains/DistributingExcellence.svg'

class TimeStamp extends React.Component {
  componentDidMount() {
    let updateTimer = setInterval(()=> {
      this.forceUpdate();
    }, 5000);
    this.setState({
      timer: updateTimer
    })
  }
  componentWillUnmount() {
    if (this.state.timer) {
      clearInterval(this.state.timer);
    }
  }
  render() {
    return (
      <div className={styles.time}>
        {
          this.props.timestamp
          ?
          moment.min(moment(this.props.timestamp, 'X'), moment()).fromNow()
          :
          'Never'
        }
      </div>
    );
  }
}


class Connection extends React.Component {
  render() {
    let logo = svgABC;
    let name = 'ABC Audits';
    if (this.props.connection.url.toLowerCase().indexOf('abcaudits') !== -1) {
      logo = svgABC;
      name = 'ABC Audits';
    } else if (this.props.connection.url.toLowerCase().indexOf('growersync') !== -1) {
      logo = svgGrowerSync;
      name = 'GrowerSync';
    } else if (this.props.connection.url.toLowerCase().indexOf('retailfresh') !== -1) {
      logo = svgRetailFresh;
      name = 'RetailFresh';
    } else if (this.props.connection.url.toLowerCase().indexOf('pspperfection') !== -1) {
      logo = svgPSP;
      name = 'PSP Perfection';
    } else if (this.props.connection.url.toLowerCase().indexOf('auditormining') !== -1) {
      logo = svgAuditorMining;
      name = 'AuditorMining';
    } else if (this.props.connection.url.toLowerCase().indexOf('distributing') !== -1) {
      logo = svgDistributing;
      name = 'DistributingExcellence';
    }

    return (
      <div className={styles.root}>
        <div className={styles.left}>
          <div className={styles.label}>
            {'Connection Type'}
          </div>
          <div>
            <img src={svgIncomingConnection} className={styles.typeIcon} alt="Incoming Connection" />
          </div>
          <div className={styles.label}>
            {'Incoming'}
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.leftSide}>
            <div className={styles.iconContainer}>
                <img src={logo} className={styles.nameIcon} alt="name" />
                <div>{name}</div>
            </div>
            <div className={styles.status}>
              {'Received '+(this.props.connection.receivedCount || 0)+' Certifications'}
            </div>
            <div className={styles.updatedContainer}>
              <div className={styles.label}>
                {'Last Update: '}
              </div>
              <div className={styles.time}>
                <TimeStamp timestamp={this.props.connection.lastUpdate} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Connection.propTypes = {
  connection: PropTypes.shape({
    url: PropTypes.string,
    receivedCount: PropTypes.number,
    lastUpdate: PropTypes.number
  })
};

export default Connection;
