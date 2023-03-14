import { Spinner, Table } from 'react-bootstrap';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getHadithIndex } from '../actions/hadithActions';
import { getQuranIndex } from '../actions/quranActions';
import Paginate from '../components/Paginate';

const HomePage = () => {
  const dispatch = useDispatch();
  const param = useParams();
  const pageNumber = param.pageNumber || 1;
  const quranIndex = useSelector((state) => state.quranIndex);
  const { loading, error, suraList, page, pages } = quranIndex;

  useEffect(() => {
    dispatch(getHadithIndex());
    dispatch(getQuranIndex(pageNumber));
  }, [dispatch, pageNumber]);

  return (
    <div>
      {loading ? (
        // <h1>Loading...</h1>
        <div className="center" style={{ height: '80vh' }}>
          <Spinner animation="border" variant="success" />
        </div>
      ) : error ? (
        <div className="center" style={{ height: '80vh' }}>
          <h1>{error}</h1>
        </div>
      ) : (
        <>
          <div className="main">
            <Table striped bordered hover responsive className="table-sm mt-3">
              <thead>
                <tr className="bg-success text-white">
                  <th>#</th>
                  <th>اسم السورة</th>
                  <th>সুরা নাম</th>
                  <th>Surā nāme</th>
                  <th>English Translation</th>
                  <th>TOTAL AYAH</th>
                  <th>PARA</th>
                  <th>REVEALATION TYPE</th>
                </tr>
              </thead>
              <tbody>
                {suraList.map((quran) => (
                  <tr key={quran?.item.number}>
                    <td>
                      <Link
                        to={`/sura/${quran?.item?.number}`}
                        style={{ textDecoration: 'none' }}
                      >
                        {quran?.item.number}
                      </Link>
                    </td>
                    <td>
                      <Link
                        to={`/sura/${quran?.item?.number}`}
                        style={{ textDecoration: 'none' }}
                      >
                        {quran?.item.name}
                      </Link>
                    </td>
                    <td>
                      <Link
                        to={`/sura/${quran?.item?.number}`}
                        style={{ textDecoration: 'none' }}
                      >
                        {quran?.banglaName}
                      </Link>
                    </td>
                    <td>
                      <Link
                        to={`/sura/${quran?.item?.number}`}
                        style={{ textDecoration: 'none' }}
                      >
                        {quran?.item.englishName}
                      </Link>
                    </td>
                    <td>
                      <Link
                        to={`/sura/${quran?.item?.number}`}
                        style={{ textDecoration: 'none' }}
                      >
                        {quran?.item.englishNameTranslation}
                      </Link>
                    </td>
                    <td>
                      <Link
                        to={`/sura/${quran?.item?.number}`}
                        style={{ textDecoration: 'none' }}
                      >
                        {quran?.item.numberOfAyahs}
                      </Link>
                    </td>
                    <td>
                      <Link
                        to={`/sura/${quran?.item?.number}`}
                        style={{ textDecoration: 'none' }}
                      >
                        {quran?.para}
                      </Link>
                    </td>
                    <td>
                      <Link
                        to={`/sura/${quran?.item?.number}`}
                        style={{ textDecoration: 'none' }}
                      >
                        {quran?.item.revelationType}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Paginate pages={pages} page={page} />
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
