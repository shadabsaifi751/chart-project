import React from 'react';
import {Row,Col,Container} from 'reactstrap';
import ReactApexChart from 'react-apexcharts'


  class Prograss extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [70],
        options: {
          chart: {
            height: 350,
            type: 'radialBar',
          },
          
          plotOptions: {
            radialBar: {
              hollow: {
                size: '70%',
              }
            },
          },
          labels: ['Podcast'],
          
         
        },
      
      
      };

    }

    render() {
      return (
        

       <section className=''>
           <Container className='' fluid="lg">
               <Row>
                   <Col sm={12} md={12}>
                   <h3 className='mb-3 fs-4 text-muted text-center'>Podcast</h3>
                   <div id="chart">
                      <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={350} />
                    </div>
                   </Col>
               </Row>
           </Container>
       </section>


      );
    }
  }

export default Prograss;