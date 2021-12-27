import React from 'react';
import {Row,Col,Container} from 'reactstrap';
import ReactApexChart from 'react-apexcharts'

class LineChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          name: 'Positive',
          data: [400, 210, 620, 210, 200, 250, 700]
        }, {
          name: 'Negative',
          data: [200, 180, 160, 430, 160, 150, 650]
        }, {
          name: 'Neutral',
          data: [420, 270, 270, 280, 250, 450, 500]
        }],
        options: {
          chart: {
            type: 'bar',
            height: 350,
            toolbar: {
                show: false
              },
              zoom: {
                enabled: false
              }
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '55%',
              endingShape: 'rounded'
            },
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            show: true,
            width: 9,
            colors: ['transparent']
          },
          xaxis: {
            categories: ['facebook', 'twitter', 'youtube', 'reddit', 'instagram', 'bing', 'other'],
          },
          fill: {
            opacity: 1
          },
          plotOptions: {
            bar: {
              horizontal: false,
              borderRadius: 10
            },
          },
          tooltip: {
            y: {
              formatter: function (val) {
                return val + " People"
              }
            }
          }
        },
      
      
      };
    }

  

    render() {
      return (
        

       <section className='py-5'>
           <Container className='' fluid="lg">
               <Row>
                   <Col sm={12} md={12}>
                   <h3 className='mb-5 fs-4 text-muted'>Sentiment By Source</h3>
                   <div id="chart">
                    <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={550} style={{padding:'50px 0px'}}/>
                    </div>
                   </Col>
               </Row>
           </Container>
       </section>


      );
    }
  }

export default LineChart;