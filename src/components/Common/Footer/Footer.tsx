import React from "react"
import "./Footer.scss"
import { AiFillGithub, AiFillFacebook } from "react-icons/ai"
import { FaBlog } from "react-icons/fa"
import getFullYear from "lib/Common/getNowYear"
import pushLink from "lib/Common/pushLink"
import { MY_FACEBOOK_LINK, MY_GITHUB_LINK, MY_TISTORY_LINK } from "config/config.json"

function Footer() {
    return (
        <div className="Footer">
            <div className="Footer_links">
                <AiFillGithub
                    className="Footer_links_link"
                    onClick={() => pushLink(MY_GITHUB_LINK, "_target")}
                />
                <AiFillFacebook
                    className="Footer_links_link"
                    onClick={() => pushLink(MY_FACEBOOK_LINK, "_target")}
                />
                <FaBlog
                    className="Footer_links_link"
                    onClick={() => pushLink(MY_TISTORY_LINK, "_target")}
                />
            </div>
            <div className="Footer_copyright">
                Copyrightⓒ{getFullYear()} 이곳의 모든 저작권은 Hong-JunHyeok에게 있습니다.
            </div>
        </div>
    )
}

export default Footer
