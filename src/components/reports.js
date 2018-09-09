import React, { Component } from 'react'
import Link from 'gatsby-link'

class Reports extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    this.intervalId = setInterval(() => this.loadData(), 4000)
    this.loadData()
  }

  loadData() {
    fetch('http://localhost:5000/getJSON')
      .then(response => response.json())
      .then(response => {
        this.setState({
          data: [...response],
        })
        console.log(this.state.data)
      })
  }
  render() {
    return (
      <div className="ma4 ba bw2">
        <div className="overflow-auto">
          <table className="f6 w-100 center">
            <thead>
              <tr className="stripe-dark">
                <th className="fw6  pa3 bg-white column-title">Incident</th>
                <th className="fw6  pa3 bg-white column-title">Time</th>
                <th className="fw6  pa3 bg-white column-title">From</th>
                {/* <th className="fw6 tl pa3 bg-white">Name</th> */}

                <th className="fw6 tl pa3 bg-white column-title">Location</th>
                <th className="fw6  pa3 bg-white column-title">Message</th>
                <th className="fw6  pa3 bg-white column-title">Sentiment</th>
              </tr>
            </thead>
            <tbody className="lh-copy">
              {this.state.data
                .map((report, i) => {
                  return (
                    <tr key={i} className="stripe-dark">
                      <td className="pa3 report">
                        <b>{report.disaster}</b>
                      </td>
                      <td className="pa3 report">
                        <b>
                          {' '}
                          {report.date} {report.time}
                        </b>
                      </td>
                      <td className="pa3 report">
                        {' '}
                        <b>{report.from} </b>
                      </td>
                      <td className="pa3 report">
                        {' '}
                        <b>{report.location} </b>
                      </td>
                      <td className="pa3 report">
                        <b>{report.text}</b>
                      </td>
                      <td className="pa3 report">
                        <b>{report.severity}</b>
                      </td>
                    </tr>
                  )
                })
                .reverse()}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Reports
