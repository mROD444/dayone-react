const Homework = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"><i>Best Songs Ever</i>
             
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Rap
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Pop
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Alternative
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Indie</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div>
        <h1 className="heading"><i>Best Songs Ever</i></h1>
        <p className="bio"><i>This website is a platform where I share my all-time favorite songs and the ones I'm currently obsessed with.</i></p>
      </div>
      <div className="form-cards">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              User
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <div className="main-body">
        <div className="card" style={{ width: "18rem" }}>
        <iframe style={{borderRadius: 12}} src="https://open.spotify.com/embed/track/3qoftcUZaUOncvIYjFSPdE?utm_source=generator&theme=0" width="100%" height={352} frameBorder={0} allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />

          <div className="card-body">
            <p className="card-text">
              Taylor Swift's 'Bejeweled' inspires a sense of self-empowerment
              and independence, making listeners feel as though they don't need
              a relationship to thrive, but rather, can find strength and
              fulfillment within themselves.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Released in 2022</li>
            <li className="list-group-item">Pop</li>
          </ul>
        </div>
      </div>
      <div className="main-body">
        <div className="card" style={{ width: "18rem" }}>
        <iframe style={{borderRadius: 12}} src="https://open.spotify.com/embed/track/11pEKMLmavDu8fxOB5QjbQ?utm_source=generator&theme=0" width="100%" height={352} frameBorder={0} allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />
          <div className="card-body">
            <p className="card-text">
            Drake's 'Pipe Down' serves as a therapeutic anthem, guiding listeners through the process
            of moving on by offering a heartfelt blend of introspective lyrics and soothing melodies
            that resonate with the challenges of healing after heartbreak.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
            </li>
            <li className="list-group-item">Released in 2021</li>
            <li className="list-group-item">Hip-Hop/Rap</li>
          </ul>
        </div>
      </div>
      <div className="main-body">
        <div className="card" style={{ width: "18rem" }}>
        <iframe style={{borderRadius: 12}} src="https://open.spotify.com/embed/track/20bJBbPapGQ4bqs0YcA9xY?utm_source=generator&theme=0" width="100%" height={352} frameBorder={0} allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" />

          <div className="card-body">
            <p className="card-text">
            In 'Just What I Am' by Kid Cudi, embrace the vibe, let the beats guide your soul, and feel a sense of liberation as you
             resonate with the authenticity in the lyrics. This song is your anthem, empowering you to be unapologetically yourself and revel in the beauty of your unique journey.
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Released in 2013</li>
            <li className="list-group-item">Hip-Hop-Rap</li>
          </ul>
          <div className="card-body">
          </div>
        </div>
      </div>
    </>
  );
};
export default Homework;
