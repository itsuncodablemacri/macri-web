window.onload = function () {
  const favicon = document.getElementById("favicon");
  let pageTitle = document.title;
  let attentionMessage = "Macri | Come back";

  document.addEventListener("visibilitychange", function (e) {
    let isPageActive = !document.hidden;

    if (!isPageActive) {
      toggle();
    } else {
      document.title = pageTitle;
    }
  });

  document.addEventListener("visibilitychange", function (e) {
    if (!document.hidden) {
      document.title = pageTitle;
      favicon.href = "https://cdn.discordapp.com/attachments/768750812079456266/1038130303622983730/20200620_134235-min_1_1.png";
    }
  });

  function toggle() {
    if (document.title === attentionMessage) {
        document.title = pageTitle;
        favicon.href = "https://cdn.discordapp.com/attachments/768750812079456266/1038130303622983730/20200620_134235-min_1_1.png";
    } else {
        document.title = attentionMessage;
        favicon.href = "https://cdn.discordapp.com/attachments/768750812079456266/1038130303622983730/20200620_134235-min_1_1.png";
    }
  }   
};
