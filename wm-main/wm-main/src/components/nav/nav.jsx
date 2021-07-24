import React from "react"
import "./nav.scss"

export default function SiteNavigation() {
    return (
        <>
            <header>
                <div className="container-fluid">
                    <div className="container">
                        <div className="row col-spacing">
                            <div className="logo-sec col-xl-1 col-lg-1">
                                <button className="toggle">
                                    <svg width="25px" height="25px" fill="#252935" viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg"><g fill="#252935"><g><path d="M20 16v-3.112H0V16h20zm0-6.444V6.444H0v3.112h20zm0-6.444V0H0v3.112h20z"></path></g></g></svg>
                                </button>
                                <div className="header-logo">
                                    <svg className="wm-icon wm-logo-mini" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 33 19"><g fill="none"><path d="M.46.893v9.35h29.645V.893H.46z"></path><path fill="#00cdbe" d="M18 .373v1.232h.035c.332-.47.73-.833 1.2-1.092.465-.258 1-.387 1.605-.387.58 0 1.11.11 1.59.334.478.223.842.617 1.09 1.18.272-.4.642-.75 1.11-1.057.468-.305 1.02-.457 1.66-.457.485 0 .935.06 1.35.176.414.117.768.305 1.064.563.296.258.527.596.692 1.013.166.417.25.92.25 1.506v6.092h-2.522v-5.16c0-.304-.012-.59-.036-.86-.023-.272-.088-.506-.194-.707-.107-.2-.264-.36-.47-.48-.208-.12-.49-.18-.844-.18-.355 0-.642.07-.86.2-.22.132-.392.31-.516.53-.124.212-.207.46-.25.74-.04.27-.06.55-.06.832v5.07h-2.52v-5.1c0-.27-.007-.54-.02-.8-.01-.267-.06-.51-.15-.733-.09-.224-.237-.4-.443-.537-.2-.13-.51-.2-.91-.2-.12 0-.27.03-.47.08-.19.05-.38.15-.57.3-.18.15-.34.36-.47.637-.13.28-.19.64-.19 1.086v5.28h-2.52V.373H18zM8.752 9.476l-1.634-6.11h-.035L5.52 9.476H2.91L0 .373h2.663l1.686 6.18h.03L5.91.373h2.452l1.562 6.163h.035L11.64.373h2.592L11.34 9.476H8.75z" transform="translate(.46 .767)"></path><path d="M31.72 3.01h1.204V.604h-2.41V3.01h1.205z"></path><path fill="#000" d="M15.39 15.578c5.448 0 8.206-2.052 8.206-2.052l1.172 1.573s-4.068 3.42-9.38 3.42-9.38-3.42-9.38-3.42l1.174-1.58s2.758 2.05 8.208 2.05"></path></g></svg>
                                </div>
                            </div>
                            <div className="header-search col-xl-7 col-lg-7">
                                <div className="input-set">
                                    <form>
                                        <svg className="wm-search" width="14px" height="14px" viewBox="0 0 1792 1792" aria-hidden="true"><path fill="#999999" d="M1216 832q0-185-131.5-316.5t-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5 316.5-131.5 131.5-316.5zm512 832q0 52-38 90t-90 38q-54 0-90-38l-343-342q-179 124-399 124-143 0-273.5-55.5t-225-150-150-225-55.5-273.5 55.5-273.5 150-225 225-150 273.5-55.5 273.5 55.5 225 150 150 225 55.5 273.5q0 220-124 399l343 343q37 37 37 90z"></path></svg>
                                        <input type="search" name="search" placeholder="Products, retailers, brands, and more" />
                                    </form>
                                    <form className="location-form">
                                        <svg width="14px" height="14px" viewBox="0 0 100 100"><path fill="#999999" d="M38.5 0C17.325 0 0 17.325 0 38.5c0 8.02 2.567 15.4 6.737 21.817l31.763 42.35 31.763-42.35C74.433 54.22 77 46.52 77 38.5 77 17.325 59.675 0 38.5 0zm.183 55.367C29.508 55.367 22 47.86 22 38.683 22 29.508 29.508 22 38.683 22c9.176 0 16.684 7.508 16.684 16.683 0 9.176-7.508 16.684-16.684 16.684z"></path></svg>
                                        <input type="search" name="search" placeholder="USA, 9000 Airport Boulevard Northwest, Concord, NC" />
                                    </form>
                                </div>
                                <div className="menu-sec">
                                    <ul>
                                        <li><a href="#">Dispensaries</a></li>
                                        <li><a href="#">Deliveries</a></li>
                                        <li><a href="#">Maps</a></li>
                                        <li><a href="#">Brands</a></li>
                                        <li><a href="#">Products</a></li>
                                        <li><a href="#" className="deal">Deals</a></li>
                                        <li><a href="#">Learn</a></li>
                                        <li><a href="#">Strains</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="account-icon col-xl-4 col-lg-4">
                                <div className="notification">
                                    <a href="#"><svg width="24px" height="24px" fill="#60646f" viewBox="0 0 24 24"><path fill="#60646f" d="M13.5 4.24c2.86.7 4.5 3.33 4.5 6.48v5.13l2 2.05v1.02H4V17.9l2-2.05v-5.13c0-3.16 1.63-5.79 4.5-6.48v-.7c0-.85.67-1.54 1.5-1.54s1.5.69 1.5 1.54v.7zm-1.1 17.72a2.04 2.04 0 01-2.41-2.01h4a2.04 2.04 0 01-1.59 2.01z" fill-rule="evenodd" clip-rule="evenodd"></path></svg></a>
                                </div>
                                <div className="m-left wishlist">
                                    <a href="#"><svg className="wm-icon wm-icon-heart" width="24px" height="24px" viewBox="0 0 24 24"><path fill="#60646f" d="M16.5 2.62c-1.74 0-3.41.83-4.5 2.14a5.94 5.94 0 00-4.5-2.14A5.5 5.5 0 002 8.24c0 3.86 3.4 7 8.55 11.8L12 21.36l1.45-1.35C18.6 15.25 22 12.1 22 8.24a5.5 5.5 0 00-5.5-5.62z"></path></svg></a>
                                </div>
                                <div className="m-left cart">
                                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="wm-icon-cart" width="24px" height="24px" viewBox="0 0 24 24"><path fill="#60646f" d="M8 18c-1.1 0-1.99.9-1.99 2S6.9 22 8 22s2-.9 2-2-.9-2-2-2zM2 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H8.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 21 4H6.21l-.94-2H2zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path></svg></a>
                                </div>
                                <div className="m-left account">
                                    <a href="#">Log in</a>
                                    <a href="#" className="sing-up">Sign up</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
