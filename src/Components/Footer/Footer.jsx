import React from "react";
import { Link } from "react-router-dom";
import s from "./Footer.module.css"

export default function Footer(){
    return ( 
        <footer className={s.footer}>
            <span>
            © 2023{" "}
				<Link to="/">
					<a href="/#">
						LasEmapanasDeSusanita™
					</a>
				</Link>
				. All Rights Reserved.
            </span>
            <div className={s.listaFooter}>
            <ul>
                <li>
                <Link to="/about">
						<a href="/#">
							Nosotros
						</a>
					</Link>
                </li>
                <li>
					<Link to="/contact">
						<a href="/#">
							Deja tu opinión
						</a>
					</Link>
				</li>
            </ul>
            </div>
        </footer>
    )
}