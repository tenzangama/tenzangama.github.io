date = new Date()

var invitation_date = new Date(2017, 3, 10);

var remain_invitation_date = Math.floor((invitation_date - date) / (24 * 60 * 60 * 1000));

remain_invitation_date += 1;

if (remain_invitation_date >= 1) {
    document.getElementById("invitation_time").innerHTML = "募集開始まで残り" + remain_invitation_date + "日！"
} else {
    document.getElementById("invitation_time").innerHTML = "現在募集中です"
};

    function setCounter(year, month, day, key, end_message){
        var target_date = new Date(year, month-1, day);
        var remain_days = Math.floor((target_date-date)/(24*60*60*1000));
        remain_days += 1;
        if (end_message == null){
            end_message = "終了しました。"
        }
        if(remain_days >= 1){
            document.getElementById(key).innerHTML = "あと"+ remain_days + "日";
        }else{
            document.getElementById(key).innerHTML = end_message;
        }
    };