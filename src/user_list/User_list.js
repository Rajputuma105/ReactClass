import "./User_list.css";

function UserList() {
  let obj = {
    user1: {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ4iskkkejaPN5n9qTXRA1Jgwezc1a4KlC2G8NtFOlR0-ls7fDnHtGTObeXCasnGbvkWQ&usqp=CAU",
      name: "Sam Kuran",
      message: "For what reason would it be advisable for me to...",
      date: "18/12/18",
    },
    user2: {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ4iskkkejaPN5n9qTXRA1Jgwezc1a4KlC2G8NtFOlR0-ls7fDnHtGTObeXCasnGbvkWQ&usqp=CAU",
      name: "Sam",
      message: "For what reason would it be advisable for me to...",
      date: "18/12/18",
    },
    user3: {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ4iskkkejaPN5n9qTXRA1Jgwezc1a4KlC2G8NtFOlR0-ls7fDnHtGTObeXCasnGbvkWQ&usqp=CAU",
      name: " Kuran",
      message: "For what reason would it be advisable for me to...",
      date: "18/12/18",
    },
    user4: {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ4iskkkejaPN5n9qTXRA1Jgwezc1a4KlC2G8NtFOlR0-ls7fDnHtGTObeXCasnGbvkWQ&usqp=CAU",
      name: "Saan",
      message: "For what reason would it be advisable for me to...",
      date: "18/12/18",
    },
    user5: {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ4iskkkejaPN5n9qTXRA1Jgwezc1a4KlC2G8NtFOlR0-ls7fDnHtGTObeXCasnGbvkWQ&usqp=CAU",
      name: "Kim",
      message: "For what reason would it be advisable for me to...",
      date: "18/12/18",
    },
  };
  return (
    <div className="root">
      <div className="row">
        <div>
          <img className="user-image" src={obj.user1.image} alt=""></img>
        </div>
        <div>
          <div>
            <b>{obj.user1.name}</b>
          </div>
          <div className="message">{obj.user1.message} </div>
        </div>
        <div>{obj.user1.date}</div>
      </div>
      <div className="row">
        <div>
          <img className="user-image" src={obj.user2.image} alt=""></img>
        </div>
        <div>
          <div>
            <b>{obj.user2.name}</b>
          </div>
          <div className="message">{obj.user2.message} </div>
        </div>
        <div>{obj.user2.date}</div>
      </div>
      <div className="row">
        <div>
          <img className="user-image" src={obj.user3.image} alt=""></img>
        </div>
        <div>
          <div>
            <b>{obj.user3.name}</b>
          </div>
          <div className="message">{obj.user3.message} </div>
        </div>
        <div>{obj.user3.date}</div>
      </div>

      <div className="row">
        <div>
          <img className="user-image" src={obj.user4.image} alt=""></img>
        </div>
        <div>
          <div>
            <b>{obj.user4.name}</b>
          </div>
          <div className="message">{obj.user4.message} </div>
        </div>
        <div>{obj.user4.date}</div>
      </div>
      <div className="row">
        <div>
          <img className="user-image" src={obj.user5.image} alt=""></img>
        </div>
        <div>
          <div>
            <b>{obj.user5.name}</b>
          </div>
          <div className="message">{obj.user5.message} </div>
        </div>
        <div>{obj.user5.date}</div>
      </div>
    </div>
  );
}
export default UserList;
