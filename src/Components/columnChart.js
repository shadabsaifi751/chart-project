import React from 'react';
import {Row,Col,Container} from 'reactstrap';
import ReactApexChart from 'react-apexcharts';

class Chart extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
        
          series: [{
            name: 'Positive',
            data: [350, 350, 450, 550, 350, 350, 650, 250, 450]
          }, {
            name: 'Negative',
            data: [50, 60, 260, 60, 95, 250, 20, 350, 260]
          }, {
            name: 'Neutral',
            data: [130, 80, 50, 180, 35, 50,50, 50, 50]
          }],
          options: {
            chart: {
              type: 'bar',
              height: 550,
              stacked: true,
              toolbar: {
                show: false
              },
              zoom: {
                enabled: false
              }
            },
            responsive: [{
              breakpoint: 480,
              options: {
                legend: {
                  position: 'bottom',
                  offsetX: -10,
                  offsetY: 0
                }
              }
            }],
            plotOptions: {
              bar: {
                horizontal: false,
                borderRadius: 10
              },
            },
            xaxis: {
              type: 'data',
              categories: ['keyword1', 'keyword2', 'keyword3', 'keyword14',
                'keyword5', 'keyword6', 'keyword7', 'keyword8', 'keyword9'
              ],
            },
            legend: {
              position: 'right',
              offsetX: 0,
              offsetY: 40
            },
            fill: {
              opacity: 1
            }
          },
        
        
        };
      }

    render(){
        return (
            <section >
               <Container fluid="lg">
                <Row className='py-5 shadow-sm'>
                        <Col sm={12} md={12} className=''>
                            <h3 className='mb-5 fs-4 text-muted'>Sentiment Vs Keywords</h3>
                        <div id="chart">
                            <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={550} />
                        </div>
                        </Col>
                    </Row>
               </Container>
            </section>
        );
    }
};

export default Chart;