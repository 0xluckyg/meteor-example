import '../html/myPage.html'

if (Meteor.isClient) {

    Template.myPage.helpers({

        myImages: [

            { image: 'http://i.imgur.com/qK42fUu.jpg', commentNum: 2453 },
            { image: 'https://images.unsplash.com/photo-1435771112039-1e5b2bcad966?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450', commentNum: 2453 },
            { image: 'https://images.unsplash.com/photo-1442406964439-e46ab8eff7c4?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450', commentNum: 2453 },
            { image: 'https://images.unsplash.com/photo-1444090542259-0af8fa96557e?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450', commentNum: 2453 },
            { image: 'https://images.unsplash.com/photo-1434543177303-ef2cc7707e0d?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450', commentNum: 2453 },
            { image: 'http://s3.amazonaws.com/kidzworld_photo/images/2012523/58071fcd-edc4-4eb7-b0cb-a1e7313ed8be/gallery_Gallery_HotDog.jpg', commentNum: 2453 },
            { image: 'https://images.unsplash.com/photo-1436262513933-a0b06755c784?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450', commentNum: 2453 },
            { image: 'https://images.unsplash.com/photo-1439396087961-98bc12c21176?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450', commentNum: 2453 },
            { image: 'https://images.unsplash.com/photo-1439694458393-78ecf14da7f9?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450', commentNum: 2453 },
            { image: 'http://images.designtrends.com/wp-content/uploads/2016/03/24075558/fashion-tips14.jpg', commentNum: 2453 },
            { image: 'http://img09.deviantart.net/7fa2/i/2010/053/c/e/man_fashion_by_melihvatansever.jpg', commentNum: 2453 },
            { image: 'https://images.unsplash.com/photo-1439524970634-649c37a69e5c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1450&h=825&fit=crop&s=bfda9916c885869b43b70738693428d9', commentNum: 2453 }
        ],

        //Refers to photoClick.js
        myPostIsClicked: function() {
            return Session.get('myPostIsClicked');
        }


    });

}