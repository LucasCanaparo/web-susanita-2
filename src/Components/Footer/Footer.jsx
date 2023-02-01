import React from "react";
import { Link } from "react-router-dom";
import s from "./Footer.module.css"

export default function Footer(){
    return ( 
        <footer className={s.footer}>
            <span>
            © 2023{" "}
				<Link to="/">
					<a>
						LasEmapanasDeSusanita™
					</a>
				</Link>
				. All Rights Reserved.
            </span>
            <div className={s.listaFooter}>
            <ul>
                <li>
                <Link to="/about">
						<a>
							About
						</a>
					</Link>
                </li>
                <li>
					<Link to="/contact">
						<a>
							Contact
						</a>
					</Link>
				</li>
            </ul>
            </div>
        </footer>
    )
}