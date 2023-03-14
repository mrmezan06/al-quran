import { useEffect } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getHadithIndex } from '../../actions/hadithActions';
import { getQuranAyah } from '../../actions/quranActions';
import PaginateSura from '../../components/PaginateSura';

const SuraPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const pageNumber = params.pageNumber || 1;

  const quranAyah = useSelector((state) => state.quranAyah);
  const { loading, error, AR, BN, EN, audio, page, pages, details, fullAudio } =
    quranAyah;

  useEffect(() => {
    const sura_number = params.sura_number;
    dispatch(getHadithIndex());
    dispatch(getQuranAyah(sura_number, pageNumber));
  }, [dispatch, pageNumber, params.sura_number]);

  return (
    <div>
      {loading ? (
        // <h1>Loading...</h1>
        <div className="center" style={{ height: '80vh' }}>
          <Spinner animation="border" variant="success" />
        </div>
      ) : error ? (
        <div className="center" style={{ height: '80vh' }}>
          <h1 className="bg-danger text-white">{error}</h1>
        </div>
      ) : (
        <>
          <Row className="m-2">
            <Col className="bg-info center">
              <Row className="center mtb-10">
                <p className="font-weight-bold text-white f-18 center mtb-10">
                  No. {details?.sura_no}
                </p>
              </Row>
            </Col>
            <Col className="bg-warning center">
              <Row className="center mtb-10">
                <p className="text-white font-weight-bold f-18 center mtb-10">
                  {details?.sura_no !== '9' && AR?.start?.ayat}
                </p>
              </Row>
            </Col>
            <Col className="bg-info center">
              <Row className="center mtb-10">
                <p className="font-weight-bold text-white f-18 center mtb-10">
                  {page} of {pages} Pages | Per Page 15 Ayah
                </p>
              </Row>
            </Col>
          </Row>
          <Row className="m-2">
            <Col className="bg-success">
              <p className="text-white font-weight-bold f-24 center">
                সুরাঃ {details?.sura_name}
              </p>
              <Row className="center gap-10">
                <p className="text-white f-14">
                  মোট আয়াতঃ {details?.total_ayat}
                </p>
                <p className="text-white f-14">পারাঃ {details?.para}</p>
              </Row>
            </Col>
            <Col className="bg-danger">
              <p className="text-white font-weight-bold f-24 center">
                Sura: {details?.eng_name}
              </p>

              <Row className="center gap-10">
                <p className="text-white f-14">
                  Total Ayah: {details?.total_ayat}
                </p>
                <p className="text-white f-14">Para: {details?.para}</p>
              </Row>
            </Col>
          </Row>
          <Row className="m-2 center">
            <audio className="player" src={fullAudio?.audio} controls></audio>
          </Row>
          <Row className="m-2">
            <Col>
              <Row
                className="center bg-success text-white"
                style={{ height: '50px' }}
              >
                بيت شعر
              </Row>
            </Col>

            <Col>
              <Row
                className="center bg-success text-white"
                style={{ height: '100%' }}
              >
                আয়াত
              </Row>
            </Col>
            <Col>
              <Row
                className="center bg-success text-white"
                style={{ height: '100%' }}
              >
                Verse
              </Row>
            </Col>
            <Col>
              <Row
                className="center bg-success text-white"
                style={{ height: '100%' }}
              >
                Audio
              </Row>
            </Col>
          </Row>
          {AR?.aya?.map((ayah, index) => (
            <Row className="m-2" key={index}>
              <Col>
                <Row className="box-no-right centerV">
                  <Col>{ayah?.ayat}</Col>
                </Row>
              </Col>

              <Col>
                <Row className="box centerV">
                  {details?.sura_no === '1'
                    ? index === 5
                      ? '6 & 7'
                      : Number(BN?.aya[index].aya) - 1
                    : BN?.aya[index].aya}
                  . {BN?.aya[index].text}
                </Row>
              </Col>
              <Col>
                <Row className="box-no-left centerV">
                  {details?.sura_no === '1'
                    ? index === 5
                      ? '6 & 7'
                      : Number(EN?.aya[index].aya) - 1
                    : EN?.aya[index].aya}
                  . {EN?.aya[index].text}
                </Row>
              </Col>
              <Col>
                <Row className="box-no-left centerV">
                  <Col>
                    <audio src={audio?.aya[index]?.audio} controls></audio>
                  </Col>
                </Row>
              </Col>
            </Row>
          ))}
        </>
      )}
      <PaginateSura pages={pages} page={page} sura_no={details?.sura_no} />
    </div>
  );
};

export default SuraPage;
