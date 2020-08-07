import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import { map } from "lodash";
import AvatarNotFound from "../../assets/png/avatar-no-found.png";
import { API_HOST } from "../../utils/constants";
import { getUserApi } from "../../api/user";

import "./ListMessages.scss";

export default function ListMessages(props) {
  const { messages } = props;
  return (
    <div className="list-messages">
      {map(messages, (message, index) => (
        <Message key={index} message={message} />
      ))}
    </div>
  );
}

function Message(props) {
  const { message } = props;
  const [userInfo, setUserInfo] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState(null);

  useEffect(() => {
    getUserApi(message.userId).then((response) => {
      setUserInfo(response);
      setAvatarUrl(
        response?.avatar
          ? `${API_HOST}/getAvatar?id=${response.id}`
          : AvatarNotFound
      );
    });
  }, [message]);

  return (
    <div className="message">
      <Image className="avatar" src={avatarUrl} roundedCircle />
    </div>
  );
}
