Vue.createApp({
  data() {
    return {
      navbar: {
        title: "My Portofolio",
        description: "Ini adalah tempat saya untuk berbagi segala pengetahuan yang saya peroleh tentang koding dan teknologi.",
        menu: {
          home: {
            url: "/Syalala/index.html",
            title: "Home",
          },
          about: {
            url: "/Syalala/menu/about.html",
            title: "About",
          },
          projects: {
            url: "/Syalala/menu/projects.html",
            title: "Projects",
          },
          contact: {
            url: "/Syalala/menu/contact.html",
            title: "Contact",
          },
          artikel: {
            url: "/Syalala/menu/artikel.html",
            title: "Article",
          },
        },
      },
      jumbotron: {
        imageProfile: "./bahan/syafarino.jpeg",
        nama: "An Syafarino Armawahyudi",
        role: "UI/UX Desainer | College Student",
      },
      about: {
        hero: "./bahan/syafarino.jpeg",
        tentang: "Tentang",
        penulis: "ditulis oleh",
        a: {
          url: "https://www.instagram.com/syafarino_15/?hl=id",
          nama: " an syafarino armawahyudi",
          tgl: ". pada 8 Mei 2022.",
        },
        deskripsi:
          "Perkenalkan nama saya An syafarino biasa di panggil rino. Saya adalah anak pertama dengan kelahiran 2002. Tepat pada 1 Mei 2002 saya dilahirkan. Rahma, Deca merupakan panggilan kedua adikku. Keduanya adalah wanita wanita hebat yang dianugerahkan kepadaku sebagai anak pertama dalam keluarga.",
        deskripsi2:
          "Tepat pada awal Mei kemarin diriku bertambah usia, yang sebelumnya 19 tahun beranjak ke kehidupan kepala dua. Saat ini aku mengenyam bangk perkuliahan di salah satu kampus swasta di kota seribu serindu, apakah anda tau di mana itu? yaps yogyakarta namanya. Sistem informasi menjadi bidang yang ingin kutekuni, dengan segenap hiruk pikuk perkembangan teknologi pada saat ini menjadi salah satu dari beribu alasan ku memenentukan jalan. Waktu SMA telah kulalui, dengan banyak cerita yang masih lekat teringat jelas dengan segala baik buruknya. Banyak pengalaman yang tlah kulewati hingga posisi saat ini, mulai dari siswa hinga mencari kerja tuk mencukupi kebutuhan mahasiswa.",
        deskripsi3:
          "Organisasi mahasiswa menjadi salah satu saksi bisu betapa berkembangnya diriku. Public speaking yang menjadi masalah utama kini tlah nampak bukti nyatanya. Problem solving yang masih jadi topik di kalangan mahasiswa tapi kini bukan lagi halangan tuk berkaca pada masalah yang ada. Dengan ilmu sosial yang ku kuasai, aku mulai fokus dalam menekuni bidang yang bersangkut paut dengan research, UI/UX desainer, bahkan hingga Front end developer.",

        pendidikan: "Pendidikan",
        Sekolah: {
          menengah: "Sekolah Menengah Atas",
          nama: "MAN INSAN CENDEKIA BATAM",
          alamat: "Sambau, Kecamatan Nongsa, Kota Batam, Kepulauan Riau 29465",
          lihat: "Lebih banyak...",
          link: "https://www.icbatam.sch.id/",
          kuliah: "Perguruan Tinggi",
          nama2: "UNIVERSITAS AHMAD DAHLAN",
          alamat2: "Jl. Ringroad Selatan, Kragilan, Tamanan, Kec. Banguntapan, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55191",
          link2: "https://uad.ac.id/id/",
        },
        hardskill: "Hard Skill",
        hard: {
          figma: "Figma",
          persentase: "85%",
          deskfigma:
            "Saya senang dibidang desain terutama UI/UX desain, dengan begitu saya mempelajari salah satu framework bernama figma dan sudah menyelesaikan beberapa projek prototype dengan menggunakan figma.",
          tentangfigma: "Figma ...",
          urlfigma: "https://www.figma.com/",
          projekfigma: "Riwayat projek",
          urlprojek: "https://www.figma.com/file/pe4nJOvBQgBjTytAOi0orw/ZONE?node-id=0%3A1",

          html: "HTML",
          persentasehtml: "80%",
          deskhtml:
            "Saya juga sedang menekuni front end development sehingga saya mempelajari HTML atau yang biasa di sebut Hypertext Markup Language. Bahasa markup yang digunakan untuk membuat sebuah halaman web. ",
          tentanghtml: "HTML ...",
          urlhtml: "https://www.w3schools.com/html/default.asp",
          projekhtml: "Riwayat projek",
          urlprojek2: "https://github.com/syafarino15/tekweb2022",

          css: "CSS",
          persentasecss: "80%",
          deskcss:
            "Saya juga sedang menekuni front end development sehingga saya mempelajari CSS atau yang biasa di sebut Cascading Style Sheet. CSS akan menggubakan komponennya untuk membuat sebuah web lebih terstruktur dan seragam.",
          tentangcss: "CSS ...",
          urlcss: "https://www.w3schools.com/css/",
          projekcss: "Riwayat projek",
          urlprojek3: "https://github.com/syafarino15/tekweb2022",

          js: "Javascript",
          persentasejs: "80%",
          deskjs:
            "JavaScript adalah bahasa pemrograman yang digunakan dalam pengembangan website agar lebih dinamis dan interaktif. Bahkan dengan JavaScript ini kamu bisa membuat aplikasi, tools, atau bahkan game pada web ",
          tentangjs: "Javascript ...",
          urljs: "https://www.w3schools.com/js/default.asp",
          projekjs: "Riwayat projek",
          urlprojek4: "https://github.com/syafarino15/tekweb2022",
        },
        softskill: {
          judul: "Soft Skill",
          ps: "Public Speaking",
          psv: "Problem Solving",
          ct: "Critical Thingking",
        },
      },
      projek: {
        nama: "My Project",
        projek1: {
          url: "../bahan/projek2.PNG",
          desk1: "Ini adalah projek saya dalam membuat sebuah prototype aplikasi yang bernama ZONE. Pada projek ini saya mengambil peran sebagai Usage research dan UX Designer.",
        },
        projek2: {
          url: "../bahan/projek1.PNG",
          desk2: "Sedangkan ini adalah contoh prototype grab yang coba saya tirukan menggunakan aplikasi figma.",
        },
        projek3: {
          url: "../bahan/spotify.PNG",
          desk3:
            "Selanjutnya prototype yang saya selesaikan adalah prototype sporify, saya coba menyelesaikan prototype seperti ini untuk melatih desain dan ke keakurasian detail desain saya. tujuannya untuk meningkatkan jam terbang dan kecekatan dalam mendesain. Saya menggunakan mobbin.   dalam mendesain ulang prototype.",
        },
        projek4: {
          url: "../bahan/projek3.PNG",
          desk4: "Ini adalah contoh wireframe sekaligus prototype yang digunakan dalam mendesain sebuah web dalam projek di semester 3.",
        },
        projek5: {
          url: "../bahan/portofolio.PNG",
          desk5: "Berikut adalah projek saya dalam membuat desain tampilan awal sebuah web portofolio yang di dalamnya terdapat deskripsi diri.",
        },
      },
      contact: {
        judul: "Contact Me",
        nama: {
          judul: "Nama Lengkap",
        },
        email: {
          judul: "Email",
        },
        pesan: {
          judul: "Pesan",
        },
        kirim: {
          judul: "Kirim",
        },
      },
      footer: {
        url: "https://www.instagram.com/syafarino_15/",
        nama: "An Syafarino Armawahyudi",
      },
    };
  },
  methods: {
    getHeaderData() {
      axios
        .get("https://raw.githubusercontent.com/faridsurya/Vue-Axios-Basic/master/contents/header.json")
        .then((res) => {
          console.log(res.data); //melihat respon data pada console browser
          this.header = res.data; //memperbarui variabel header pada bagian data()
        })
        .catch((error) => {
          console.log(error); //melihat error jika pengambilan data adalah gagal
        });
    },
  },
  beforeMount() {
    this.getHeaderData(); //eksekusi fungsi getHeaderData() pada bagian methods saat halaman terbuka
  },
}).mount("#app");
