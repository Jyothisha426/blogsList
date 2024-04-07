import './index.css'

const blogsList = [
  {
    id: 1,
    title: 'My first post',
    description: 'A high quality solution beautifully designed for startups',
    publishedDate: 'Aug 2nd',
  },
  {
    id: 2,
    title: 'My second post',
    description:
      'A high quality solution beautifully designed for startups and Bussiness schools',
    publishedDate: 'Mar 1st',
  },
  {
    id: 3,
    title: 'My third post',
    description: 'A high quality solution beautifully designed for startups',
    publishedDate: 'Jan 2nd',
  },
  {
    id: 4,
    title: 'My fourth post',
    description:
      'A high quality solution beautifully designed for startups and Bussiness schools. ',
    publishedDate: 'Dec 24th',
  },
  {
    id: 5,
    title: 'My fifth post',
    description: 'A high quality solution beautifully designed for startups',
    publishedDate: 'Nov 10th',
  },
]
const Home = () => (
  <div className="home-container">
    <div className="profile-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
        alt="profile"
        className="profile"
      />
      <h1 className="name-qn">Wade Warren</h1>
      <p className="details">Software developer at UK</p>
    </div>

    <ul className="qns-container">
      {blogsList.map(eachQn => (
        <li key={eachQn.id} className="list-item">
          <div className="each-qn">
            <div className="header-container">
              <h1 className="name-qn">{eachQn.title}</h1>
              <p className="details description">{eachQn.publishedDate}</p>
            </div>
            <p className="details description">{eachQn.description}</p>
          </div>
          <hr className="line" />
        </li>
      ))}
    </ul>
  </div>
)

export default Home
