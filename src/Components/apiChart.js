import React, { useState, useEffect } from "react";
import {Table,Row,Col,Container} from 'reactstrap';

const ApiChart = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const url = "https://card-admin.dev.intuaition.net/chart/data";
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => setUser(resp.data));
  });

  const getKeyword = user.map((item) => (
    <th className="fw-bold">{item.keyword}</th>
    // console.log(item)
  ));
  const getSource = user.map((item) => (
    <th>{item.source}</th>
    // console.log(item)
  ));

  return (
        <section>
            <Container fluid="lg">
                <Row>
                    <Col sm={12} md={12} className="">
                    <h3 className='mb-5 fs-4 text-muted mt-5'>First Chart Using Api data</h3>
                    <Table bordered className="text-secondary mt-5">
                        <thead>
                        <tr className="tab" >
                            <th>Keywords</th>
                            <th className="text-center justify-content-center">{getSource[0]}</th>
                            <th className="text-center mx-auto">{getSource[1]}</th>
                            <th className="text-center">{getSource[2]}</th>
                            <th className="text-center">{getSource[3]}</th>
                            <th className="text-center">{getSource[4]}</th>
                            <th className="text-center">other</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="tab-2">
                            <th scope="row">{getKeyword[1]} <br /> <span className="fs-6 fw-normal">10K Mentions</span></th>
                            <td className="position-relative"><span className="position-absolute top-50 start-50 translate-middle bg-primary">3.3k</span></td>
                            <td className="position-relative"><span className="position-absolute top-50 start-50 translate-middle bg-success">2.3k</span></td>
                            <td className="position-relative"><span className="position-absolute top-50 start-50 translate-middle">1.5k</span></td>
                            <td className="position-relative"><span className="position-absolute top-50 start-50 translate-middle bg-warning">850</span></td>
                            <td className="position-relative"><span className="position-absolute top-50 start-50 translate-middle bg-danger">650</span></td>
                            <td className="position-relative"><span className="position-absolute top-50 start-50 translate-middle bg-secondary">200</span></td>
                        </tr>
                        <tr className="tab-2">
                            <th scope="row">{getKeyword[6]} <br /> <span className="fs-6 fw-normal">5K Mentions</span></th>
                            <td className="position-relative"><span className="position-absolute top-50 start-50 translate-middle bg-primary">3.3k</span></td>
                            <td className="position-relative"><span className="position-absolute top-50 start-50 translate-middle bg-success">2.3k</span></td>
                            <td className="position-relative"><span className="position-absolute top-50 start-50 translate-middle">1.5k</span></td>
                            <td className="position-relative"><span className="position-absolute top-50 start-50 translate-middle bg-warning">850</span></td>
                            <td className="position-relative"><span className="position-absolute top-50 start-50 translate-middle bg-danger">650</span></td>
                            <td className="position-relative"><span className="position-absolute top-50 start-50 translate-middle bg-secondary">200</span></td>
                        </tr>
                        <tr className="tab-2">
                            <th scope="row">{getKeyword[12]} <br /> <span className="fs-6 fw-normal">3K Mentions</span></th>
                            <td className="position-relative"><span className="position-absolute top-50 start-50 translate-middle bg-primary">3.3k</span></td>
                            <td className="position-relative"><span className="position-absolute top-50 start-50 translate-middle bg-success">2.3k</span></td>
                            <td className="position-relative"><span className="position-absolute top-50 start-50 translate-middle">1.5k</span></td>
                            <td className="position-relative"><span className="position-absolute top-50 start-50 translate-middle bg-warning">850</span></td>
                            <td className="position-relative"><span className="position-absolute top-50 start-50 translate-middle bg-danger">650</span></td>
                            <td className="position-relative"><span className="position-absolute top-50 start-50 translate-middle bg-secondary">200</span></td>
                        </tr>
                        <tr className="tab-2">
                            <th scope="row">{getKeyword[18]} <br /> <span className="fs-6 fw-normal">2K Mentions</span></th>
                            <td className="position-relative"><span className="position-absolute top-50 start-50 translate-middle bg-primary">3.3k</span></td>
                            <td className="position-relative"><span className="position-absolute top-50 start-50 translate-middle bg-success">2.3k</span></td>
                            <td className="position-relative"><span className="position-absolute top-50 start-50 translate-middle">1.5k</span></td>
                            <td className="position-relative"><span className="position-absolute top-50 start-50 translate-middle bg-warning">850</span></td>
                            <td className="position-relative"><span className="position-absolute top-50 start-50 translate-middle bg-danger">650</span></td>
                            <td className="position-relative"><span className="position-absolute top-50 start-50 translate-middle bg-secondary">200</span></td>
                        </tr>
                        <tr className="tab-2">
                            <th scope="row">{getKeyword[24]} <br /> <span className="fs-6 fw-normal">1K Mentions</span></th>
                            <td className="position-relative"><span className="position-absolute top-50 start-50 translate-middle bg-primary">3.3k</span></td>
                            <td className="position-relative"><span className="position-absolute top-50 start-50 translate-middle bg-success">2.3k</span></td>
                            <td className="position-relative"><span className="position-absolute top-50 start-50 translate-middle">1.5k</span></td>
                            <td className="position-relative"><span className="position-absolute top-50 start-50 translate-middle bg-warning">850</span></td>
                            <td className="position-relative"><span className="position-absolute top-50 start-50 translate-middle bg-danger">650</span></td>
                            <td className="position-relative"><span className="position-absolute top-50 start-50 translate-middle bg-secondary">200</span></td>
                        </tr>
                        </tbody>
                    </Table>
                    </Col>
                </Row>
            </Container>
        </section>
  );
};

export default ApiChart;
