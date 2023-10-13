// firebase_subscribe.js
var firebaseConfig = {
    apiKey: "AIzaSyBAL6OOuX7_J8SO00g8pnBsm8naoogHqbk",
    authDomain: "myfin-1077.firebaseapp.com",
    databaseURL: "https://myfin-1077.firebaseio.com",
    projectId: "myfin-1077",
    storageBucket: "myfin-1077.appspot.com",
    messagingSenderId: "820421847276",
    appId: "1:820421847276:web:6004a7e45247fc35"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// браузер поддерживает уведомления
// вообще, эту проверку должна делать библиотека Firebase, но она этого не делает
if ('Notification' in window) {

    var messaging = firebase.messaging();
    var pushUp = '.pushup';
    var modal = '.modal';
    var pushUpClose = '.pushup__close';
    var pushUpSubscribe = '.pushup__subscribe';

    // пользователь уже разрешил получение уведомлений
    // подписываем на уведомления если ещё не подписали
    if (Notification.permission === 'granted') {
        subscribe();
    }
    // по клику, запрашиваем у пользователя разрешение на уведомления
    // и подписываем его
    if (Notification.permission === 'default' && empty(getCookie('push_close'))) {
        setTimeout(function () {
            requestCounter('push_popup_visible');
            addCookie('push_close', 24 * 2 * 3600);
            $(pushUp).addClass('visible');
        },4000);
    }


    $(document)
        .on('click', pushUpClose, function (e) {
            e.stopPropagation();
            $(pushUp).addClass('pushup__invisible');
        })
        .on('click', pushUp, function () {
            $(pushUp).addClass('pushup__invisible');
        })
        .on('click', pushUpSubscribe, function () {
            subscribe();
        })
        .mouseup(function (e){
            var pushUp = $(".pushup");
            if (!pushUp.is(e.target) && !$(modal).is(e.target) && $(modal).has(e.target).length === 0
                && pushUp.hasClass('visible') && pushUp.has(e.target).length === 0)

            { pushUp.addClass('pushup__invisible') }
        });
}



function subscribe() {
    // запрашиваем разрешение на получение уведомлений
    messaging.requestPermission()
        .then(function () {
            // получаем ID устройства
            messaging.getToken()
                .then(function (currentToken) {

                    if (currentToken) {
                        sendTokenToServer(currentToken);
                    } else {
                        console.warn('Не удалось получить токен.');
                        setTokenSentToServer(false);
                    }
                })
                .catch(function (err) {
                    console.warn('При получении токена произошла ошибка.', err);
                    setTokenSentToServer(false);
                });
        })
        .catch(function (err) {
            console.warn('Не удалось получить разрешение на показ уведомлений.', err);
        });
}

// отправка ID на сервер
function sendTokenToServer(currentToken) {
    if (!isTokenSentToServer(currentToken)) {
        console.log('Отправка токена на сервер...');

        var location = window.location.href ,
            action = $('#site-params').attr('data-action'),
            controller = $('#site-params').attr('data-cont'),
            version = $('#site-params').attr('data-version');

        $.ajax({
            url: "/ajax/pushuser",
            type: "post",
            data: {
                key: currentToken,
                referer: location,
                controller: controller,
                action: action,
                version: version
            },
            success: function (b) {
                console.log(b)
            }
        });
        firebase.database().ref(Date.now()).set({
            token: currentToken
        });
        setTokenSentToServer(currentToken);

    } else {
        console.log('Токен уже отправлен на сервер.');
    }
}

// используем localStorage для отметки того,
// что пользователь уже подписался на уведомления
function isTokenSentToServer(currentToken) {
    return window.localStorage.getItem('sentFirebaseMessagingToken') == currentToken;
}

function setTokenSentToServer(currentToken) {
    window.localStorage.setItem(
        'sentFirebaseMessagingToken',
        currentToken ? currentToken : ''
    );
}

if ('Notification' in window) {
    var messaging = firebase.messaging();

    messaging.onMessage(function(payload) {
        console.log('Message received. ', payload);
        new Notification(payload.notification.title, payload.notification);
    });

    // ...
}

messaging.onMessage(function(payload) {
    console.log('Message received. ', payload);

    // регистрируем пустой ServiceWorker каждый раз
    navigator.serviceWorker.register('messaging-sw.js');

    // запрашиваем права на показ уведомлений если еще не получили их
    Notification.requestPermission(function(result) {
        if (result === 'granted') {
            navigator.serviceWorker.ready.then(function(registration) {
                // теперь мы можем показать уведомление
                return registration.showNotification(payload.notification.title, payload.notification);
            }).catch(function(error) {
                console.log('ServiceWorker registration failed', error);
            });
        }
    });
});

