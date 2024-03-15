import profileImageCss from "./profileImage.module.css"

const ProfileImage = () => {
    return (
        <div className={`${profileImageCss.container_padding}`}>
        <div className={`${profileImageCss.profile_img_container}`}>
            <div className={`${profileImageCss.constrained}`}>
                <img src="/sherlihy.png"/>
            </div>
        </div>
        </div>
    )
}

export default ProfileImage
