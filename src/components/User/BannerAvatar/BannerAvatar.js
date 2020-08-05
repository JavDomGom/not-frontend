import React, { useState } from "react";
import { Button } from "react-bootstrap";
import ConfigModal from "../../Modal/ConfigModal";
import EditUserForm from "../../User/EditUserForm";
import AvatarNotFound from "../../../assets/png/avatar-no-found.png";
import { API_HOST } from "../../../utils/constants";

import "./BannerAvatar.scss";

export default function BannerAvatar(props) {
  const { user, loggedUser } = props;
  const [showModal, setShowModal] = useState(false);
  const bannerUrl = user?.banner ? `${API_HOST}/getBanner?id=${user.id}` : null;

  const avatarUrl = user?.avatarUrl
    ? `${API_HOST}/getAvatar?id=${user.id}`
    : AvatarNotFound;

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
          {loggedUser._id === user.id && (
            <Button onClick={() => setShowModal(true)}>Edit profile</Button>
          )}
          {loggedUser._id !== user.id && <Button>Follow</Button>}
        </div>
      )}

      <ConfigModal show={showModal} setShow={setShowModal} title="Edit profile">
        <EditUserForm user={user} setShowModal={setShowModal} />
      </ConfigModal>
    </div>
  );
}
