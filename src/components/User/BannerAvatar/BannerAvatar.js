import React from "react";
import { Button } from "react-bootstrap";
import AvatarNotFound from "../../../assets/png/avatar-no-found.png";
import { API_HOST } from "../../../utils/constants";

import "./BannerAvatar.scss";

export default function BannerAvatar(props) {
  const { user, loggedUser } = props;
  const bannerUrl = user?.banner ? `${API_HOST}/getBanner?id=${user.id}` : null;

  const avatarUrl = user?.avatarUrl
    ? `${API_HOST}/getAvatar?id=${user.id}`
    : AvatarNotFound;

  console.log(user);

  return (
    <div
      className="banner-avatar"
      style={{ backgroundImage: `url('${bannerUrl}')` }}
    >
      <div
        className="avatar"
        style={{ backgroundImage: `url('${avatarUrl}')` }}
      />
      {user && (
        <div className="options">
          {loggedUser._id === user.id && <Button>Edit profile</Button>}
          {loggedUser._id !== user.id && <Button>Follow</Button>}
        </div>
      )}
    </div>
  );
}
