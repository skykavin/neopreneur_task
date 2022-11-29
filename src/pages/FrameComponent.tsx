import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <div className={styles.frameDiv}>
      <div className={styles.frameDiv1} id="side-bar-1">
        <div className={styles.frameDiv2} id="side-bar-2">
          <div className={styles.frameDiv3} id="company-holder-2">
            <img
              className={styles.vectorIcon}
              alt="none"
              loading="lazy"
              src="../vector.svg"
            />
          </div>
          <button className={styles.frameButton}>
            <img className={styles.vectorIcon1} alt="" src="../vector1.svg" />
          </button>
          <button className={styles.frameButton1}>
            <img className={styles.vectorIcon1} alt="" src="../vector2.svg" />
          </button>
          <button className={styles.frameButton}>
            <img className={styles.vectorIcon1} alt="" src="../vector3.svg" />
          </button>
          <button className={styles.frameButton}>
            <img className={styles.vectorIcon1} alt="" src="../vector4.svg" />
          </button>
        </div>
      </div>
      <div className={styles.frameDiv4}>
        <div className={styles.frameDiv5}>
          <div className={styles.frameDiv6}>
            <div className={styles.frameDiv7} id="title-logo-container">
              <div className={styles.frameDiv8} id="logo">
                <img
                  className={styles.vectorIcon5}
                  alt=""
                  src="../vector5.svg"
                />
              </div>
              <label
                className={styles.frameLabel}
                htmlFor="company-label"
                tabIndex={1}
              >
                <div className={styles.frameDiv9}>
                  <b className={styles.iamneoaiTalentCenter}>
                    iamneo.ai Talent Center
                  </b>
                </div>
              </label>
            </div>
            <div className={styles.frameDiv10} id="search-container">
              <div className={styles.frameDiv11}>
                <img
                  className={styles.vectorIcon6}
                  alt=""
                  src="../vector6.svg"
                />
              </div>
              <input
                className={styles.searchInput}
                type="search"
                defaultValue="search"
                placeholder="Search "
              />
            </div>
          </div>
          <div className={styles.frameDiv12}>
            <button className={styles.frameButton4}>
              <b className={styles.addItemB}>Add Item</b>
              <img className={styles.vectorIcon1} alt="" src="../vector7.svg" />
            </button>
            <button className={styles.frameButton5}>
              <img className={styles.vectorIcon8} alt="" src="../vector8.svg" />
            </button>
            <button className={styles.frameButton6}>
              <img className={styles.vectorIcon6} alt="" src="../vector9.svg" />
            </button>
            <div className={styles.frameDiv13} id="account-image-container">
              <img className={styles.image1Icon} alt="none" />
            </div>
          </div>
        </div>
        <div className={styles.frameDiv14} id="publish-container">
          <div className={styles.frameDiv15}>
            <div className={styles.frameDiv16} id="job-container">
              <div className={styles.frameDiv17} id="job-icon">
                <img className={styles.frameIcon} alt="icon" />
                <div className={styles.frameDiv18} id="iobs-mini-container">
                  <b className={styles.iamneoaiTalentCenter} id="jobs-text">
                    Jobs
                  </b>
                </div>
                <button className={styles.frameButton7}>
                  <img
                    className={styles.vectorIcon10}
                    alt=""
                    src="../vector10.svg"
                  />
                </button>
              </div>
              <div className={styles.frameDiv19} id="current-job-container">
                <b className={styles.iamneoaiTalentCenter}>
                  Full-stack Developer
                </b>
              </div>
            </div>
            <button className={styles.frameButton8}>
              <b className={styles.viewJobDetails}>View job details</b>
            </button>
          </div>
          <main className={styles.frameMain} id="jobs-dropdown">
            <div className={styles.frameDiv20} id="add-cantidates-container">
              <span className={styles.frameSpan} id="add-candidates-text">
                <b className={styles.iamneoaiTalentCenter}>Add Candidates</b>
              </span>
              <button className={styles.frameButton9}>
                <img
                  className={styles.vectorIcon6}
                  alt=""
                  src="../vector11.svg"
                />
              </button>
            </div>
            <button className={styles.frameButton10}>
              <div className={styles.frameDiv21}>
                <img
                  className={styles.vectorIcon12}
                  alt=""
                  src="../vector12.svg"
                />
              </div>
              <div className={styles.frameDiv22}>
                <b className={styles.published}>Published</b>
              </div>
            </button>
          </main>
        </div>
        <div className={styles.frameDiv23} id="lister-container">
          <div className={styles.frameDiv24} id="ative-candidates-container">
            <b
              className={styles.allCandidates}
              id="all-candidates"
            >{`All Candidates - `}</b>
            <b
              className={styles.active32B}
              id="active-member"
            >{`Active (32) `}</b>
          </div>
          <div className={styles.frameDiv25} id="last-sort-container">
            <b className={styles.sortBy} id="sort-by">
              Sort by
            </b>
            <div className={styles.frameDiv26} id="last-ubdate-container">
              <b className={styles.lastUbdated} id="last-ubdate">
                Last ubdated
              </b>
              <button className={styles.frameButton11}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="../vector13.svg"
                />
              </button>
            </div>
          </div>
          <button className={styles.frameButton12}>
            <img className={styles.vectorIcon14} alt="" src="../vector14.svg" />
          </button>
        </div>
        <div className={styles.frameDiv27} id="main-content-container">
          <div className={styles.frameDiv28} id="main-content-contaoner-1">
            <div className={styles.frameDiv29} id="content-1">
              <div className={styles.frameDiv30} id="differnt-type-selection">
                <div className={styles.rectangleDiv} id="indicator-on-touch" />
                <b className={styles.open11} id="diffent-headings">
                  Open - 11
                </b>
              </div>
              <div className={styles.frameDiv31} id="main-card-holder">
                <div className={styles.frameDiv32} id="card-hearder">
                  <div className={styles.frameDiv33} id="card-hearder-content">
                    <span
                      className={styles.gowthamShanmugamSpan}
                      id="name-candidate"
                    >
                      Gowtham Shanmugam
                    </span>
                    <span
                      className={styles.chennaiUniversitySpan}
                      id="sub-content-candidate"
                    >
                      Chennai University
                    </span>
                  </div>
                  <div className={styles.frameDiv34} id="register-holder">
                    <span className={styles.rEG10695Span} id="register">
                      REG: 10695
                    </span>
                  </div>
                </div>
                <div className={styles.frameDiv35} id="footer-content">
                  <div className={styles.frameDiv36} id="star-holder">
                    <img
                      className={styles.vectorIcon15}
                      alt=""
                      src="../vector15.svg"
                    />
                    <img
                      className={styles.vectorIcon15}
                      alt=""
                      src="../vector15.svg"
                    />
                    <img
                      className={styles.vectorIcon15}
                      alt=""
                      src="../vector15.svg"
                    />
                    <img
                      className={styles.vectorIcon15}
                      alt=""
                      src="../vector15.svg"
                    />
                    <img
                      className={styles.vectorIcon15}
                      alt=""
                      src="../vector15.svg"
                    />
                  </div>
                  <div className={styles.frameDiv37} id="specility-holder">
                    <b className={styles.dB} id="date-time">
                      12 d
                    </b>
                    <img className={styles.image1Icon1} alt="" />
                    <button className={styles.frameButton13}>
                      <img className={styles.menuVerticalIcon} alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameDiv29} id="content-1">
              <div className={styles.frameDiv30} id="differnt-type-selection">
                <div className={styles.rectangleDiv} id="indicator-on-touch" />
                <b className={styles.open11} id="diffent-headings">
                  Open - 11
                </b>
              </div>
              <div className={styles.frameDiv31} id="main-card-holder">
                <div className={styles.frameDiv32} id="card-hearder">
                  <div className={styles.frameDiv33} id="card-hearder-content">
                    <span
                      className={styles.gowthamShanmugamSpan}
                      id="name-candidate"
                    >
                      Gowtham Shanmugam
                    </span>
                    <span
                      className={styles.chennaiUniversitySpan}
                      id="sub-content-candidate"
                    >
                      Chennai University
                    </span>
                  </div>
                  <div className={styles.frameDiv34} id="register-holder">
                    <span className={styles.rEG10695Span} id="register">
                      REG: 10695
                    </span>
                  </div>
                </div>
                <div className={styles.frameDiv35} id="footer-content">
                  <div className={styles.frameDiv36} id="star-holder">
                    <img
                      className={styles.vectorIcon15}
                      alt=""
                      src="../vector20.svg"
                    />
                    <img
                      className={styles.vectorIcon15}
                      alt=""
                      src="../vector20.svg"
                    />
                    <img
                      className={styles.vectorIcon15}
                      alt=""
                      src="../vector20.svg"
                    />
                    <img
                      className={styles.vectorIcon15}
                      alt=""
                      src="../vector20.svg"
                    />
                    <img
                      className={styles.vectorIcon15}
                      alt=""
                      src="../vector20.svg"
                    />
                  </div>
                  <div className={styles.frameDiv37} id="specility-holder">
                    <b className={styles.dB} id="date-time">
                      12 d
                    </b>
                    <img className={styles.image1Icon1} alt="" />
                    <button className={styles.frameButton13}>
                      <img className={styles.menuVerticalIcon} alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameDiv29} id="content-1">
              <div className={styles.frameDiv30} id="differnt-type-selection">
                <div className={styles.rectangleDiv} id="indicator-on-touch" />
                <b className={styles.open11} id="diffent-headings">
                  Open - 11
                </b>
              </div>
              <div className={styles.frameDiv31} id="main-card-holder">
                <div className={styles.frameDiv32} id="card-hearder">
                  <div className={styles.frameDiv33} id="card-hearder-content">
                    <span
                      className={styles.gowthamShanmugamSpan}
                      id="name-candidate"
                    >
                      Gowtham Shanmugam
                    </span>
                    <span
                      className={styles.chennaiUniversitySpan}
                      id="sub-content-candidate"
                    >
                      Chennai University
                    </span>
                  </div>
                  <div className={styles.frameDiv34} id="register-holder">
                    <span className={styles.rEG10695Span} id="register">
                      REG: 10695
                    </span>
                  </div>
                </div>
                <div className={styles.frameDiv35} id="footer-content">
                  <div className={styles.frameDiv36} id="star-holder">
                    <img
                      className={styles.vectorIcon15}
                      alt=""
                      src="../vector15.svg"
                    />
                    <img
                      className={styles.vectorIcon15}
                      alt=""
                      src="../vector15.svg"
                    />
                    <img
                      className={styles.vectorIcon15}
                      alt=""
                      src="../vector15.svg"
                    />
                    <img
                      className={styles.vectorIcon15}
                      alt=""
                      src="../vector15.svg"
                    />
                    <img
                      className={styles.vectorIcon15}
                      alt=""
                      src="../vector15.svg"
                    />
                  </div>
                  <div className={styles.frameDiv37} id="specility-holder">
                    <b className={styles.dB} id="date-time">
                      12 d
                    </b>
                    <img className={styles.image1Icon1} alt="" />
                    <button className={styles.frameButton13}>
                      <img className={styles.menuVerticalIcon} alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
