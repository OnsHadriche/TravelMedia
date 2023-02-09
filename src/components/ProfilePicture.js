import { useSelector } from 'react-redux'

function ProfilePicture({size, ...rest}) {
  const userInfo = useSelector(state=> state.user.info)
  const userImg = userInfo?.image
  
  return (
    <div>
       <img
        {...rest}
        src={userImg}
        alt="profile-pic"
        className="rounded-circle"
        width={size}
        height={size}
      />
    </div>
  )
}

export default ProfilePicture

