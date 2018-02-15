import React from 'react';

const ContactPage = () => {
  return(
    <div>
    <section className="hero is-fullheight">
      <div className="hero-body" id="contactPar">
        <div className="container">
          <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src="https://media-exp2.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAdBAAAAJGUwNGI5YTMwLTJjNWUtNDRmMS1iMDdiLTJiYjE4YWY3MzNlZA.jpg" alt="Chris Eckert" />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>Chris Eckert</strong> <small>@iamchrisjp</small> <small>31m</small>
                    <br/>
                    Hvis du er intereseret i et samarbejde eller yderligere information, kan du altid kontakte mig på min mail.
                    <br/>
                    Du kan også finde mig på min sociale medier, jeg ser frem til at høre fra dig.
                  </p>
                </div>
                <nav className="level is-mobile">
                  <div className="level-left">
                    <a className="level-item" href="mailto:chris@chriseckert.dk">
                      <span className="is-small"><i className="fas fa-envelope"></i> chris@chriseckert.dk</span>
                    </a>
                  </div>
                </nav>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="columns container is-size-3 has-text-centered">
          <a href="https://github.com/iamchrisjp" target="_blank" className="column">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/chris-eckert-812a76135" target="_blank" className="column">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.behance.net/chrisecker3eab" target="_blank" className="column">
          <i className="fab fa-behance"></i>
          </a>
          <a href="https://dribbble.com/Eckert" target="_blank" className="column">
            <i className="fab fa-dribbble"></i>
          </a>
        </div>
      </div>
      </section>
    </div>
  )
}

export default ContactPage;
