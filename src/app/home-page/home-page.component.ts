import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  @Output() home: EventEmitter<any> = new EventEmitter<any>();
  arrayOfConversations = [
    {
      groupName: "The Girls",
      groupImage: "https://www.freepik.com/free-icon/moon-phases_971334.htm",
      conversation: [
        {
          name: "Brittany",
          image:
            "https://i.pinimg.com/originals/60/e2/e1/60e2e1fd8d114041b0d41b23da09eecb.jpg",
          content: "Yeah. That sux tho"
        },
        {
          name: "Jess",
          image:
            "https://ih0.redbubble.net/image.216441544.5583/flat,800x800,070,f.jpg",
          content:
            "I was so worried about the program I forgot the chapter review questions"
        },
        {
          name: "Britney",
          image:
            "https://vignette.wikia.nocookie.net/p__/images/6/66/Kirara_2.jpg/revision/latest?cb=20160726091542&path-prefix=protagonist",
          content:
            "I am sorry girl. I hope you were able to get your work done O.O"
        },
        {
          name: "Britney",
          image:
            "https://vignette.wikia.nocookie.net/p__/images/6/66/Kirara_2.jpg/revision/latest?cb=20160726091542&path-prefix=protagonist",
          content: "So I ended up getting back into pokemon go"
        },
        {
          name: "Britney",
          image:
            "https://vignette.wikia.nocookie.net/p__/images/6/66/Kirara_2.jpg/revision/latest?cb=20160726091542&path-prefix=protagonist",
          content: "teampotato.png"
        },
        {
          name: "Britney",
          image:
            "https://vignette.wikia.nocookie.net/p__/images/6/66/Kirara_2.jpg/revision/latest?cb=20160726091542&path-prefix=protagonist",
          content: "<3 <3 <3"
        },
        {
          name: "Jess",
          image:
            "https://ih0.redbubble.net/image.216441544.5583/flat,800x800,070,f.jpg",
          content: "You still Team Potato?"
        },
        {
          name: "Jess",
          image:
            "https://ih0.redbubble.net/image.216441544.5583/flat,800x800,070,f.jpg",
          content: "assets/mugging.png"
        },
        {
          name: "Jess",
          image:
            "https://ih0.redbubble.net/image.216441544.5583/flat,800x800,070,f.jpg",
          content:
            "Got mugged by ratatatats the other day...we were frightened..."
        },
        {
          name: "Britney",
          image:
            "https://vignette.wikia.nocookie.net/p__/images/6/66/Kirara_2.jpg/revision/latest?cb=20160726091542&path-prefix=protagonist",
          content: "Omg (＾ｖ＾)"
        },
        {
          name: "Brandy",
          image:
            "https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/g/gray-wolf_thumb.JPG",
          content: "Apparently flareon was scared"
        },
        {
          name: "Brandy",
          image:
            "https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/g/gray-wolf_thumb.JPG",
          content: "assets/flareon.jpg"
        },
        {
          name: "Britney",
          image:
            "https://vignette.wikia.nocookie.net/p__/images/6/66/Kirara_2.jpg/revision/latest?cb=20160726091542&path-prefix=protagonist",
          content: "<3 ＼(^o^)／ awe! Flareon is like fuck this lol"
        },
        {
          name: "Admin",
          image:
            "http://mythologian.net/wp-content/uploads/2017/09/Eye-of-Horus-and-Its-Meaning-Throughout-Cultures.png",
          content: "Remember to keep messages clean!"
        }
      ]
    },
    {
      groupName: "Inquisition Scouts",
      groupImage:
        "https://levelskip.com/rpgs/How-to-Level-Up-Quickly-on-Dragon-Age-Inquisition",
      conversation: []
    }
  ];
  selectedConversation = {};
  constructor(private data: DataService, private router: Router) {
    if (!this.data.isLoggedIn()) {
      //navigate to login
      this.router.navigateByUrl('/login');
    }

  }
  ngOnInit() {
  }

  selectConversation(event) {
    this.home.emit('Click from nested component');
  }
  getConversations(event) {
    this.home.emit('Click from nested component');
  }

}
