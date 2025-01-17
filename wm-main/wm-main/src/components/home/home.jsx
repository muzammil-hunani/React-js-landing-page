import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./bootstrap.min.css"
import "./slick.css"
import "./slick-theme.css"
import "./home.scss"
import Slider from "react-slick"


export default function Home() {
var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
      ]
  };
    return (
        <>

            <section className="hero-sec">
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 content-box">
                                <h2>High, North Carolina</h2>
                                <p>There are no retailers listed in your region. Get weekly cannabis news right to your inbox.</p>
                                <ul>
                                    <li><svg width="20px" height="20px" viewBox="0 0 20 20" className="strains__SVG-sc-1l5fpvx-0 jMULOv"><path d="M19.9 5.5a.8.8 0 00-1-.5.5.5 0 01-.6-.1l-3.2-3.3a.5.5 0 01-.1-.5.8.8 0 10-1.6-.5c-.6 1.7-.5 3.6.2 5.3a5.8 5.8 0 01.2 3.9.2.2 0 01-.3 0l-3.3-3.3a.2.2 0 010-.3l1.5-.3a.8.8 0 000-1.6 7.7 7.7 0 00-7.3 6c-.3 1.5-.2 3 .4 4.4l.3 1a.2.2 0 01-.3.3l-1.4-1.4a.2.2 0 010-.2.8.8 0 00-.7-1.3c-.7 0-1.5.1-2.2.3a.8.8 0 00.6 1.6.5.5 0 01.5.1l3.2 3.3a.5.5 0 01.1.5.8.8 0 101.6.5c.6-1.7.5-3.6-.2-5.3a5.8 5.8 0 01-.2-3.9.2.2 0 01.3 0l3.3 3.3a.2.2 0 010 .4l-1.5.2a.8.8 0 100 1.7 7.7 7.7 0 007.4-6.1c.2-1.5.1-3-.5-4.4l-.3-1A.2.2 0 0115 4l1.4 1.4a.2.2 0 010 .3.8.8 0 00.7 1.3c.8 0 1.5-.2 2.2-.4a.8.8 0 00.5-1zM12.7 12a5.8 5.8 0 01-.9.9.4.4 0 01-.5 0l-4-4.1a.4.4 0 01-.1-.6 5.8 5.8 0 01.9-.9.4.4 0 01.5 0l4.1 4.1a.4.4 0 010 .6z" fill="#00a8a3"></path></svg>Learn about strains</li>

                                    <li><svg className="wm-icon-pot-leaf" width="20px" height="20px" viewBox="0 0 24 24"><path fill="#00a8a3" d="M12.11 22c-.23-.5-.4-1.23-.47-1.98a9.46 9.46 0 010-1.86 11.45 11.45 0 01-6.68 1.98c.37-1.13 3.23-2.19 4.23-2.56l-1.83-.2c-1.32-.3-4.86-1.48-5.36-2.4 2.64-.4 5.26-.23 7.3.59-.7-.7-1.55-1.23-2.15-2.02a19.67 19.67 0 01-3.5-6.32 15.6 15.6 0 015.65 4.62c.32.41.77.8.98 1.31-.31-3.97.07-6.61.99-9.38.2-.6.32-1.3.66-1.78.32 1.05.73 2.13.98 3.26.27 1.19.45 2.47.51 3.76.08 1.05 0 1.99 0 2.98-.05.35-.08 1-.14 1.32 0-.03.07-.05.07-.08l1.24-1.67c1.03-1.35 3.8-3.79 5.48-4.38-.32 2.03-2.73 5.8-3.98 6.9l-1.9 1.67c2.42-.96 4.86-1.2 7.81-.78-.02.06-.05.07-.07.08-1.03 1.12-3.57 1.94-5.3 2.33l-2 .2a8.86 8.86 0 014.23 2.51c-1.95.3-3.99-.46-5.33-1.08l-1.46-.86a8.91 8.91 0 00.44 3.76l-.4.08z"></path></svg>Get the latest cannabis news</li>

                                    <li><svg width="20px" height="20px" viewBox="0 0 24 24" className="chat__SVG-sc-2ir2ek-0 iSzww"><path fill="#00a8a3" fill-rule="evenodd" d="M21.18 12.23c.5-.26.68-.78.82-1.31V4.53a4.78 4.78 0 00-.1-.25C21.7 3.52 21.1 3 20.36 3h-9.2c-.74 0-1.42.46-1.54 1.22-.1.66-.11 1.34-.13 2.03l-.03.9h4.27c1.36.02 2.26 1 2.27 2.45a251.05 251.05 0 010 2.41v.47h.58c.36-.04.61.08.86.38.51.59 1.04 1.16 1.56 1.73l.54.58.17.16.11.1.45-2.86.31-.1c.22-.08.43-.14.61-.25zM2.03 10.04a.8.8 0 00-.03.05v6.46l.12.28c.1.22.18.43.3.6.32.46.8.63 1.32.65L4.19 21a7.65 7.65 0 01.26-.24l.64-.7c.52-.58 1.05-1.15 1.59-1.72a.9.9 0 01.58-.26c1.2-.02 2.4-.02 3.61-.01h1.85c1.1 0 1.78-.74 1.79-1.92v-5.69c-.01-1.15-.7-1.9-1.77-1.9H3.77c-.89 0-1.46.49-1.7 1.39 0 .03-.03.06-.04.1z" clip-rule="evenodd"></path></svg>Get curated content</li>
                                </ul>
                                <form>
                                    <input type="email" name="email" placeholder="Email address" />
                                    <button type="submit">Subscribe</button>
                                    <div className="consent">
                                        <input type="checkbox" name="checkbox" /><p className="consent-text">By checking this box you consent to Weedmaps' collection of your email address for the limited purpose of subscribing to Weedmaps' email communications. You agree to Weedmaps' <a href="#">privacy policy</a> & <a href="#">terms of use</a></p>  
                                    </div>  
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="find-strain">
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="bg-img col-xl-5 col-md-12">
                                <div className="find-className">
                                    <h3>Find your strain</h3>
                                    <p>With thousands to choose from, find the strain that fits your needs.</p>
                                    <a href="#">Explore strains</a>
                                </div>
                            </div>
                            <div className="feel-content col-xl-7 col-md-12">
                                <h3>How do you want to feel?</h3>
                                <p>Effects are reported by users, but keep in mind that each strain affects everyone differently.</p>
                                <div className="all-icon">
                                    <ul>
                                        <li>
                                            <a href="#">
                                            <StaticImage
                                                src="../../images/aroused.png"
                                                placeholder="blurred"
                                                quality={95}
                                                formats={["AUTO", "WEBP", "AVIF"]}
                                                alt="Aroused"
                                            />
                                            <h4>Aroused</h4></a>
                                        </li>
                                        <li>
                                            <a href="#">
                                            <StaticImage
                                                src="../../images/creative.png"
                                                placeholder="blurred"
                                                quality={95}
                                                formats={["AUTO", "WEBP", "AVIF"]}
                                                alt="creative"
                                            />
                                            <h4>Creative</h4></a>
                                        </li>
                                        <li>
                                            <a href="#">
                                            <StaticImage
                                                src="../../images/energetic.png"
                                                placeholder="blurred"
                                                quality={95}
                                                formats={["AUTO", "WEBP", "AVIF"]}
                                                alt="energetic"
                                            />
                                            <h4>Energetic</h4></a>
                                        </li>
                                        <li>
                                            <a href="#">
                                            <StaticImage
                                                src="../../images/europhic.png"
                                                placeholder="blurred"
                                                quality={95}
                                                formats={["AUTO", "WEBP", "AVIF"]}
                                                alt="europhic"
                                            />
                                            <h4>Euphoric</h4></a>
                                        </li>
                                        <li>
                                            <a href="#">
                                            <StaticImage
                                                src="../../images/focused.png"
                                                placeholder="blurred"
                                                quality={95}
                                                formats={["AUTO", "WEBP", "AVIF"]}
                                                alt="focused"
                                            />
                                            <h4>Focused</h4></a>
                                        </li>
                                        <li>
                                            <a href="#">
                                            <StaticImage
                                                src="../../images/giggly.png"
                                                placeholder="blurred"
                                                quality={95}
                                                formats={["AUTO", "WEBP", "AVIF"]}
                                                alt="giggly"
                                            />
                                            <h4>Giggly</h4></a>
                                        </li>
                                        <li>
                                            <a href="#">
                                            <StaticImage
                                                src="../../images/happy.png"
                                                placeholder="blurred"
                                                quality={95}
                                                formats={["AUTO", "WEBP", "AVIF"]}
                                                alt="happy"
                                            />
                                            <h4>Happy</h4></a>
                                        </li>
                                        <li>
                                            <a href="#">
                                            <StaticImage
                                                src="../../images/hungry.png"
                                                placeholder="blurred"
                                                quality={95}
                                                formats={["AUTO", "WEBP", "AVIF"]}
                                                alt="hungry"
                                            />
                                            <h4>Hungry</h4></a>
                                        </li>
                                        <li>
                                            <a href="#">
                                            <StaticImage
                                                src="../../images/relaxed.png"
                                                placeholder="blurred"
                                                quality={95}
                                                formats={["AUTO", "WEBP", "AVIF"]}
                                                alt="relaxed"
                                            />
                                            <h4>Relaxed</h4></a>
                                        </li>
                                        <li>
                                            <a href="#">
                                            <StaticImage
                                                src="../../images/sleepy.png"
                                                placeholder="blurred"
                                                quality={95}
                                                formats={["AUTO", "WEBP", "AVIF"]}
                                                alt="sleepy"
                                            />
                                            <h4>Sleepy</h4></a>
                                        </li>
                                        <li>
                                            <a href="#">
                                            <StaticImage
                                                src="../../images/talkative.png"
                                                placeholder="blurred"
                                                quality={95}
                                                formats={["AUTO", "WEBP", "AVIF"]}
                                                alt="talkative"
                                            />
                                            <h4>Talkative</h4></a>
                                        </li>
                                        <li>
                                            <a href="#">
                                            <StaticImage
                                                src="../../images/tingly.png"
                                                placeholder="blurred"
                                                quality={95}
                                                formats={["AUTO", "WEBP", "AVIF"]}
                                                alt="tingly"
                                            />
                                            <h4>Tingly</h4></a>
                                        </li>
                                        <li>
                                            <a href="#">
                                            <StaticImage
                                                src="../../images/uplifted.png"
                                                placeholder="blurred"
                                                quality={95}
                                                formats={["AUTO", "WEBP", "AVIF"]}
                                                alt="uplifted"
                                            />
                                            <h4>Uplifted</h4></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="best-strains">
                <div className="container-fluid">
                    <div className="container">
                        <h2 className="best-text">Best cannabis strains</h2>
                        <Slider className="cannabis row" {...settings}>
                            <div className="col-xl-12">
                                <div className="best-inner">
                                    <StaticImage
                                        src="../../images/slider-1.jpg"
                                        placeholder="blurred"
                                        quality={95}
                                        formats={["AUTO", "WEBP", "AVIF"]}
                                        alt="Spacey strains for UFO Day"
                                    />
                                    <h3>Spacey strains for UFO Day</h3>
                                    <p>Smoke your way to the stratosphere this UFO Day.</p>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="best-inner">
                                    <StaticImage
                                        src="../../images/slider-2.jpg"
                                        placeholder="blurred"
                                        quality={95}
                                        formats={["AUTO", "WEBP", "AVIF"]}
                                        alt="Yogi strains"
                                    />
                                    <h3>Yogi strains</h3>
                                    <p>Sink deeper into each yoga position with these balanced, centering strains.</p>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="best-inner">
                                    <StaticImage
                                        src="../../images/slider-3.jpg"
                                        placeholder="blurred"
                                        quality={95}
                                        formats={["AUTO", "WEBP", "AVIF"]}
                                        alt="Spacey strains for UFO Day"
                                    />
                                    <h3>Strains for jogging</h3>
                                    <p>Strains to boost your morning jog.</p>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="best-inner">
                                    <StaticImage
                                        src="../../images/slider-4.jpg"
                                        placeholder="blurred"
                                        quality={95}
                                        formats={["AUTO", "WEBP", "AVIF"]}
                                        alt="Best strains for relaxing"
                                    />
                                    <h3>Best strains for relaxing</h3>
                                    <p>Soothe yourself before you lose yourself with a little help from these strains.</p>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="best-inner">
                                    <StaticImage
                                        src="../../images/slider-5.jpg"
                                        placeholder="blurred"
                                        quality={95}
                                        formats={["AUTO", "WEBP", "AVIF"]}
                                        alt="Strains for working from home"
                                    />
                                    <h3>Strains for working from home</h3>
                                    <p>Power through video conferences and emails with the help of these productivity-boosting strains.</p>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="best-inner">
                                    <StaticImage
                                        src="../../images/slider-6.jpg"
                                        placeholder="blurred"
                                        quality={95}
                                        formats={["AUTO", "WEBP", "AVIF"]}
                                        alt="Strains for focused studying"
                                    />
                                    <h3>Strains for focused studying</h3>
                                    <p>Whether you’re looking to pass the bar or get lost in a Wikipedia hole, these strains can help.</p>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="best-inner">
                                    <StaticImage
                                        src="../../images/slider-7.jpg"
                                        placeholder="blurred"
                                        quality={95}
                                        formats={["AUTO", "WEBP", "AVIF"]}
                                        alt="The best haze strains"
                                    />
                                    <h3>The best haze strains</h3>
                                    <p>There are good Haze strains, and then there are great Haze strains.</p>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="best-inner">
                                    <StaticImage
                                        src="../../images/slider-8.jpg"
                                        placeholder="blurred"
                                        quality={95}
                                        formats={["AUTO", "WEBP", "AVIF"]}
                                        alt="Best strains for binge-watching"
                                    />
                                    <h3>Best strains for binge-watching</h3>
                                    <p>Grab a lighter, queue up your favorite shows, and kick back with relaxing, happy strains</p>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="best-inner">
                                    <StaticImage
                                        src="../../images/slider-9.jpg"
                                        placeholder="blurred"
                                        quality={95}
                                        formats={["AUTO", "WEBP", "AVIF"]}
                                        alt="Best strains for hiking"
                                    />
                                    <h3>Best strains for hiking</h3>
                                    <p>Take a few deep breaths, strap on your fanny pack, and get hiking with these centering strains.</p>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="best-inner">
                                    <StaticImage
                                        src="../../images/slider-10.jpg"
                                        placeholder="blurred"
                                        quality={95}
                                        formats={["AUTO", "WEBP", "AVIF"]}
                                        alt="Creativity-boosting strains"
                                    />
                                    <h3>Creativity-boosting strains</h3>
                                    <p>Make sure your notes app is ready to receive a tidal wave of brilliant highdeas.</p>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="best-inner">
                                    <StaticImage
                                        src="../../images/slider-11.jpg"
                                        placeholder="blurred"
                                        quality={95}
                                        formats={["AUTO", "WEBP", "AVIF"]}
                                        alt="Workout with weed"
                                    />
                                    <h3>Workout with weed</h3>
                                    <p>If you haven’t tried it, you don’t know what you’re missing.</p>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="best-inner">
                                    <StaticImage
                                        src="../../images/slider-12.jpg"
                                        placeholder="blurred"
                                        quality={95}
                                        formats={["AUTO", "WEBP", "AVIF"]}
                                        alt="If you like OG Kush"
                                    />
                                    <h3>If you like OG Kush...</h3>
                                    <p>You’re going to love these strains.</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
                <hr className="line" />
            </section>

            <section className="news-sec">
                <div className="container-fluid">
                    <div className="container">
                        <h2>Latest News</h2>
                        <div className="row">
                            <div className="col-12 post-content">
                                <div className="row">
                                    <div className="text-set col-xl-7 col-md-6 col-sm-12">
                                        <div className="text-content">
                                            <h3>Should I care about 7/10?</h3>
                                            <h5>Culture & industry</h5>
                                            <p>Lorena Cupcake, voted “best budtender in Chicago,” has answered hundreds of questions from cannabis shoppers and patients during their time as a budtender. And now they're turning that experience into...</p>
                                        </div>  
                                        <div className="date-author">
                                            <span>11 days ago</span>
                                            <a href="#">Lorena Cupcake</a>
                                        </div>
                                    </div>
                                    <div className="post-img col-xl-5 col-md-6 col-sm-12">
                                    <StaticImage
                                        src="../../images/post-1.jpg"
                                        placeholder="blurred"
                                        quality={95}
                                        formats={["AUTO", "WEBP", "AVIF"]}
                                        alt="Should I care about 7/10?"
                                    />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 post-content">
                                <div className="row">
                                    <div className="text-set col-xl-7 col-md-6 col-sm-12">
                                        <div className="text-content">
                                            <h3>Why we should be smelling weed before we buy it</h3>
                                            <h5>Culture & industry</h5>
                                            <p>Before I trained my nose on how to sniff out the dominant terpenes in cannabis, buying weed was a hazy, opaque mess.</p>
                                        </div>  
                                        <div className="date-author">
                                            <span>17 days ago</span>
                                            <a href="#">Lindsay MaHarry</a>
                                        </div>
                                    </div>
                                    <div className="post-img col-xl-5 col-md-6 col-sm-12">
                                        <StaticImage
                                            src="../../images/post-2.jpg"
                                            placeholder="blurred"
                                            quality={95}
                                            formats={["AUTO", "WEBP", "AVIF"]}
                                            alt="Why we should be smelling weed before we buy it"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 post-content">
                                <div className="row">
                                    <div className="text-set col-xl-7 col-md-6 col-sm-12">
                                        <div className="text-content">
                                            <h3>The Drop: 6 strains hitting menus in July</h3>
                                            <h5>Culture & industry</h5>
                                            <p>This month, with 7/10 being right around the corner, this roundup is all gas no brakes with Wonderbrett, 710 Labs, and more. </p>
                                        </div>  
                                        <div className="date-author">
                                            <span>20 days ago</span>
                                            <a href="#">Dante Jordan</a>
                                        </div>
                                    </div>
                                    <div className="post-img col-xl-5 col-md-6 col-sm-12">
                                        <StaticImage
                                            src="../../images/post-3.jpg"
                                            placeholder="blurred"
                                            quality={95}
                                            formats={["AUTO", "WEBP", "AVIF"]}
                                            alt="The Drop: 6 strains hitting menus in July"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="view-news">
                            <a href="#" className="view-btn">View more news</a>
                        </div>  
                    </div>
                </div>
            </section>


            <section className="stay-informed">
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="stay-content col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                <h2>Stay highly informed</h2>
                                <p>Get weekly cannabis news right to your inbox.</p>
                                <div className="icon">
                                    <svg width="28px" height="28px" viewBox="0 0 34 34"><g fill-rule="evenodd" stroke="none" stroke-width="1" transform="translate(.333 .333)"><path fill="#00a8a3" d="M21.64 14.077c-.21.071-.421.146-.635.228l-4.437 1.796-4.055-1.64-.604-.269-2.271-2.906.503-1.5c1.456 2.042 3.8 2.696 3.8 2.696-1.447-1.006-2.132-1.916-2.43-2.412l1.093-3.06c1.844 2.426 3.272 2.919 3.272 2.919-1.374-1.38-1.83-2.388-1.98-2.943l2.832-4.072 3.015 4.337c-.214.585-.717 1.495-1.894 2.678 0 0 1.333-.46 3.087-2.682l1.104 3.091c-.363.522-1.042 1.3-2.256 2.144 0 0 2.11-.588 3.57-2.394l.403 1.36-2.118 2.63zm3.63 2.721c3.967.106 5.184-1.4 5.184-1.4-1.718-1.56-3.764-2.212-6.206-1.928l1.307-1.622L24 6.609l-1.143 1.222-1.42-3.978-1.155 1.297-2.349-3.377L16.673 0l-1.165 1.792-2.335 3.358-1.155-1.297-1.42 3.978L9.492 6.65 7.82 11.638l1.542 1.974c-2.551-.368-4.735.199-6.483 1.786 0 0 1.218 1.506 5.185 1.4C5.87 17.905 2.905 20.041 0 24.16c0 0 8.144-.024 12.35-3.688-.012 2.881.7 7.866 4.226 12.742a.44.44 0 0 0 .095.116c.006.01.054-.06.085-.114 3.527-4.877 4.24-9.862 4.228-12.744 4.205 3.664 12.35 3.688 12.35 3.688-2.906-4.119-5.87-6.255-8.064-7.362z"></path></g></svg>

                                    <svg width="28px" height="28px" viewBox="0 0 34 34"><g fill-rule="evenodd" stroke="none" stroke-width="1"><g transform="translate(.333 .333)"><path fill="#00a8a3" d="M16.296 27.055c-3.216 0-5.832-3.122-5.832-6.959 0-1.692.845-3.133 2.015-5.126 1.148-1.955 2.62-4.464 3.832-8.203 1.224 3.694 2.67 6.186 3.796 8.13 1.172 2.021 2.019 3.482 2.019 5.2 0 3.836-2.615 6.958-5.83 6.958m7.98-6.959c0-.4-.043-.783-.098-1.155 2.164-2.49 5.274-7.72 5.73-10.694-2.225.792-5.63 3.586-7.764 5.834l-.23-.396c-1.476-2.545-3.286-5.836-4.912-11.212l-.738-2.29-.65 2.322C14.076 8.23 12.175 11.2 10.68 13.747l-.209.355A27.482 27.482 0 0 0 2.78 8.247l-.06.065c1.52 4.653 3.359 7.336 5.725 10.497-.07.413-.107.84-.107 1.287 0 .402.024.796.067 1.185-2.607-.436-5.5-.413-8.404.032.821 1.542 6.68 3.513 8.88 4.03l.928.1c.174.285.36.559.562.819-2.072.843-4.996 2.234-5.477 3.697 3.216-.004 5.696-.595 7.887-1.568a7.046 7.046 0 0 0 3.135.943c.01.143.02.285.033.43.116 1.248.405 2.474.785 3.315.181-.022.483-.108.664-.13-.338-1.19-.638-2.251-.748-3.614a7.038 7.038 0 0 0 3.151-.937c2.19.964 5.2 1.942 8.108 1.496-.804-1.167-3.473-2.985-5.576-3.78.149-.202.29-.411.424-.627l1.467-.144c2.864-.645 7.098-2.025 8.806-3.9.04-.022-.07-.043.167-.065v-.065c-3.31-.483-6.215-.455-8.978.102.053-.431.059-.87.059-1.319z"></path></g><path fill="#00a8a3" d="M15.611 25.833c-5.744-3.12-2.761-7.829.055-13.333-1.44 5.972-1.995 9.467-.055 13.333"></path></g></svg>

                                    <svg width="28px" height="28px" viewBox="0 0 34 28"><g fill-rule="evenodd" stroke="none" stroke-width="1"><g transform="translate(20.333 .667)"><path fill="#00a8a3" d="M12.962 18.034L7.951 3.132C7.288 1.162 5.672-.04 3.966.17L.22.629l8.757 26.037 2.889-3.01c1.314-1.371 1.76-3.651 1.096-5.622"></path></g><path fill="#00a8a3" d="M21.508 20.384c0 2.42-1.688 4.388-3.762 4.388H6.238c-2.074 0-3.762-1.968-3.762-4.388v-3.662c.092-1.563 1.312-1.456 1.312-1.456v-.004h16.41l.001.004s1.182-.105 1.309 1.378v3.74zM4.596 10.609v-.001c.176-.503.595-.832 1.06-.833l6.42-.018 6.242-.017h.003c.464 0 .883.326 1.062.827v.001l.001.004c.313.882-.241 1.852-1.06 1.854l-8.613.02-4.05.01h-.002c-.816 0-1.373-.965-1.063-1.847zm17.425.856l-.657-1.85-.002-.006-.003-.008-.292-.82-.549-1.547-1.435.004-.485.001c-.055-.867-.317-2.75-1.524-4.225-1.083-1.322-.285.205-1.406 1.38-1.134 1.19-3.177 1.832-5.792.324-2.583-1.49-3.957 1.408-4.384 2.557l-.61.002-1.435.004-.543 1.55-.292.83-.65 1.853-.437 1.248H.333v7.622c0 3.804 2.644 6.888 5.905 6.888h11.508c3.26 0 5.904-3.084 5.904-6.888v-7.622h-1.168l-.461-1.297z"></path></g></svg>

                                    <svg width="28px" height="28px" viewBox="0 0 34 34"><g fill-rule="evenodd" stroke="none" stroke-width="1"><g transform="translate(13.5 -.37)"><path fill="#00a8a3" d="M8.333 34.002L8.234 3.36h.053C8.282 1.96 6.423.697 4.135.702 1.846.708-.005 1.96 0 3.36h.055l.1 30.676 8.178-.034z"></path></g><path fill="#00a8a3" d="M2.52 30.115h5v-3.552h-5v3.552zm0-17.487h5v11.749H6.049v-2.186H4.284v2.186H2.52V12.628zm7.635-2.185l-2.93-6.4V.333H3.402V3.84L.219 10.443H.167v-.106l.037.106H.167V32h2.058v1.667h5.883V32h2.059V10.443h-.012z"></path></g></svg>
                                </div>
                            </div>  
                            <div className="stay-form col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                <form>
                                    <input type="email" name="email" placeholder="Email address" />
                                    <button type="submit">Subscribe</button>
                                    <div className="consent-box">
                                        <input type="checkbox" name="checkbox" /><p className="consent-text">By checking this box you consent to Weedmaps' collection of your email address for the limited purpose of subscribing to Weedmaps' email communications. You agree to Weedmaps' <a href="#">privacy policy</a> & <a href="#">terms of use</a></p> 
                                    </div>
                                </form>
                            </div>  
                        </div>
                    </div>
                </div>
            </section>


            <section className="regions-sec">
                <div className="container-fluid">
                    <div className="container">
                        <h2>Dispensary Regions</h2>
                        <div className="row">
                            <div className="col-xl-12 list-menu">
                                <ul>
                                    <li><a href="#">California</a></li>
                                    <li><a href="#">Los Angeles</a></li>
                                    <li><a href="#">San Francisco</a></li>
                                    <li><a href="#">Oregon</a></li>
                                    <li><a href="#">Portland</a></li>
                                    <li><a href="#">Salem</a></li>
                                    <li><a href="#">Albany/Corvallis</a></li>
                                    <li><a href="#">Washington</a></li>
                                    <li><a href="#">Seattle</a></li>
                                    <li><a href="#">Spokane</a></li>
                                    <li><a href="#">Vancouver</a></li>
                                    <li><a href="#">Colorado</a></li>
                                    <li><a href="#">Denver</a></li>
                                    <li><a href="#">Colorado Springs</a></li>
                                    <li><a href="#">Fort Collins</a></li>
                                    <li><a href="#">Boulder</a></li>
                                    <li><a href="#">Nevada</a></li>
                                    <li><a href="#">Las Vegas</a></li>
                                    <li><a href="#">Reno</a></li>
                                    <li><a href="#">Henderson</a></li>
                                    <li><a href="#">Massachusetts</a></li>
                                    <li><a href="#">Boston</a></li>
                                    <li><a href="#">Ayer</a></li>
                                    <li><a href="#">Michigan</a></li>
                                    <li><a href="#">Detroit</a></li>
                                    <li><a href="#">Maryland</a></li>
                                    <li><a href="#">Florida</a></li>
                                    <li><a href="#">Illinois</a></li>
                                    <li><a href="#">Chicago</a></li>
                                    <li><a href="#">Oklahoma</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="plugged-sec">
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="plugg-img col-xl-5 col-md-6 col-sm-12">
                                <StaticImage
                                    src="../../images/mobile.png"
                                    placeholder="blurred"
                                    quality={95}
                                    formats={["AUTO", "WEBP", "AVIF"]}
                                    alt="Mobile Image"
                                />
                            </div>
                            <div className="plugg-content col-xl-7 col-md-6 col-sm-12">
                                <h2>Get plugged in with the Weedmaps app</h2>
                                <div className="plugg-btn">
                                    <a href="#"><svg className="wm-icon wm-apple" width="14px" height="16px" viewBox="0 0 22 26"><path d="M21.765625,18.984375 C21.359375,20.2864583 20.71875,21.5885417 19.84375,22.890625 C18.5,24.9322917 17.1614583,25.953125 15.828125,25.953125 C15.3177083,25.953125 14.5885417,25.7864583 13.640625,25.453125 C12.7447917,25.1197917 11.9583333,24.953125 11.28125,24.953125 C10.6458333,24.953125 9.90625,25.125 9.0625,25.46875 C8.21875,25.8229167 7.53125,26 7,26 C5.41666667,26 3.84895833,24.6510417 2.296875,21.953125 C0.765625,19.234375 0,16.6145833 0,14.09375 C0,11.71875 0.588541667,9.77083333 1.765625,8.25 C2.93229167,6.75 4.41145833,6 6.203125,6 C6.953125,6 7.875,6.15625 8.96875,6.46875 C10.0520833,6.78125 10.7708333,6.9375 11.125,6.9375 C11.59375,6.9375 12.3385417,6.76041667 13.359375,6.40625 C14.421875,6.05208333 15.3229167,5.875 16.0625,5.875 C17.3020833,5.875 18.4114583,6.21354167 19.390625,6.890625 C19.9322917,7.265625 20.4739583,7.78645833 21.015625,8.453125 C20.1927083,9.15104167 19.5989583,9.765625 19.234375,10.296875 C18.5572917,11.2760417 18.21875,12.3541667 18.21875,13.53125 C18.21875,14.8229167 18.578125,15.984375 19.296875,17.015625 C20.015625,18.046875 20.8385417,18.703125 21.765625,18.984375 L21.765625,18.984375 Z M15.890625,0.65625 C15.890625,1.29166667 15.7395833,2 15.4375,2.78125 C15.125,3.5625 14.640625,4.28125 13.984375,4.9375 C13.421875,5.5 12.859375,5.875 12.296875,6.0625 C11.9114583,6.17708333 11.3697917,6.265625 10.671875,6.328125 C10.703125,4.77604167 11.109375,3.4375 11.890625,2.3125 C12.6614583,1.19791667 13.9635417,0.427083333 15.796875,0 C15.8072917,0.03125 15.8203125,0.0885416667 15.8359375,0.171875 C15.8515625,0.255208333 15.8645833,0.3125 15.875,0.34375 C15.875,0.385416667 15.8776042,0.4375 15.8828125,0.5 C15.8880208,0.5625 15.890625,0.614583333 15.890625,0.65625 L15.890625,0.65625 Z" id="wm-icon-apple" fill="currentColor"></path></svg>iOS</a>
                                    <a href="#" className="android-btn"><svg className="wm-icon wm-android" width="14px" height="16px" viewBox="0 0 22 26"><path d="M7.7 5.5C7.9 5.5 8 5.5 8.1 5.4 8.3 5.2 8.3 5.1 8.3 4.9 8.3 4.8 8.3 4.6 8.1 4.5 8 4.4 7.9 4.3 7.7 4.3 7.5 4.3 7.4 4.4 7.3 4.5 7.2 4.6 7.1 4.8 7.1 4.9 7.1 5.1 7.2 5.2 7.3 5.4 7.4 5.5 7.5 5.5 7.7 5.5L7.7 5.5ZM14.3 5.5C14.5 5.5 14.6 5.5 14.7 5.4 14.8 5.2 14.9 5.1 14.9 4.9 14.9 4.8 14.8 4.6 14.7 4.5 14.6 4.4 14.5 4.3 14.3 4.3 14.1 4.3 14 4.4 13.9 4.5 13.7 4.6 13.7 4.8 13.7 4.9 13.7 5.1 13.7 5.2 13.9 5.4 14 5.5 14.1 5.5 14.3 5.5L14.3 5.5ZM1.6 8.4C2 8.4 2.4 8.6 2.7 8.9 3 9.2 3.2 9.6 3.2 10L3.2 16.7C3.2 17.2 3 17.6 2.7 17.9 2.4 18.2 2.1 18.3 1.6 18.3 1.2 18.3 0.8 18.2 0.5 17.9 0.2 17.6 0 17.2 0 16.7L0 10C0 9.6 0.2 9.2 0.5 8.9 0.8 8.6 1.2 8.4 1.6 8.4L1.6 8.4ZM18.2 8.7L18.2 19.1C18.2 19.6 18 20 17.7 20.3 17.3 20.7 16.9 20.8 16.5 20.8L15.3 20.8 15.3 24.4C15.3 24.8 15.1 25.2 14.8 25.5 14.5 25.8 14.1 26 13.7 26 13.2 26 12.9 25.8 12.5 25.5 12.2 25.2 12.1 24.8 12.1 24.4L12.1 20.8 9.9 20.8 9.9 24.4C9.9 24.8 9.8 25.2 9.5 25.5 9.1 25.8 8.8 26 8.3 26 7.9 26 7.5 25.8 7.2 25.5 6.9 25.2 6.7 24.8 6.7 24.4L6.7 20.8 5.5 20.8C5.1 20.8 4.7 20.7 4.3 20.3 4 20 3.8 19.6 3.8 19.1L3.8 8.7 18.2 8.7 18.2 8.7ZM14.5 2.4C15.7 3 16.6 3.8 17.2 4.8 17.9 5.8 18.2 6.9 18.2 8.2L3.8 8.2C3.8 6.9 4.1 5.8 4.8 4.8 5.4 3.8 6.3 3 7.5 2.4L6.3 0.3C6.3 0.2 6.3 0.1 6.4 0 6.6 0 6.7 0 6.7 0.1L7.9 2.2C8.8 1.8 9.9 1.5 11 1.5 12.1 1.5 13.2 1.8 14.1 2.2L15.3 0.1C15.3 0 15.4 0 15.6 0 15.7 0.1 15.7 0.2 15.7 0.3L14.5 2.4ZM22 10L22 16.7C22 17.2 21.8 17.6 21.5 17.9 21.2 18.2 20.8 18.3 20.4 18.3 20 18.3 19.6 18.2 19.3 17.9 19 17.6 18.8 17.2 18.8 16.7L18.8 10C18.8 9.6 19 9.2 19.3 8.9 19.6 8.6 20 8.4 20.4 8.4 20.8 8.4 21.2 8.6 21.5 8.9 21.8 9.2 22 9.6 22 10L22 10Z" fill="currentColor"></path></svg>Android</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>






        </>
    )
}