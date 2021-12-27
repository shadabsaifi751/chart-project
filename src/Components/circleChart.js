import React from 'react';
import {Row,Col,Container} from 'reactstrap';
import ReactApexChart from 'react-apexcharts'

class Circle extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [50],
            options: {
              chart: {
                type: 'radialBar',
                offsetY: -20,
                sparkline: {
                  enabled: true
                }
              },
              plotOptions: {
                radialBar: {
                  startAngle: -90,
                  endAngle: 90,
                  track: {
                    background: "#e7e7e7",
                    strokeWidth: '97%',
                    margin: 5, // margin is in pixels
                    dropShadow: {
                      enabled: true,
                      top: 2,
                      left: 0,
                      color: '#999',
                      opacity: 1,
                      blur: 2
                    }
                  },
                  dataLabels: {
                    name: {
                      show: false
                    },
                    value: {
                      offsetY: -2,
                      fontSize: '50px',
                      fontWeight: '700'
                    }
                  }
                }
              },
              grid: {
                padding: {
                  top: 10
                }
              },
              fill: {
                type: 'gradient',
                gradient: {
                  shade: 'light',
                  shadeIntensity: 0.4,
                  inverseColors: false,
                  opacityFrom: 1,
                  opacityTo: 1,
                  stops: [0, 50, 53, 91]
                },
              },
              labels: ['Average Results'],
            },
          
          
          }
    };

  

    render() {
      return (
        

       <section className='py-5'>
           <Container className='' fluid="lg">
               <Row>
                   <Col sm={12} md={5}>
                   <h3 className='mb-5 fs-4 text-muted'>Average Sectiment</h3>
                   <div id="chart">
                   <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" />
                    </div>
                    <p className=' text-muted mt-4 text-center'>You Definitely need to make an effort to reach your goal</p>
                   </Col>
               </Row>
           </Container>
       </section>


      );
    }
  }

export default Circle;