import URLFetchRequestOptions = GoogleAppsScript.URL_Fetch.URLFetchRequestOptions;

type PostProps = {
  //投稿メッセージ
  message: string;
  //投稿対象のチャンネル
  channelID: string;
  //Botトークン
  token: string;
};

//Slackにメッセージを投下する
export const slackPostMessage = ({ message, channelID, token }: PostProps) => {
  const postUrl = "https://slack.com/api/chat.postMessage";
  const postData = {
    token: token,
    channel: channelID,
    text: message,
  };
  const options: URLFetchRequestOptions = {
    method: "post",
    payload: postData,
  };

  UrlFetchApp.fetch(postUrl, options);
};
