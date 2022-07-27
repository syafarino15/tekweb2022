```

<!--  Tabel Users -->

GET: /users

data: [
{
        "id": "1",
        "nama": "An Syafarino Armawahyudi",
        "deskripsi": "UI/UX Desainer | College Stude",
        "gambar": "https://arma.my.id/bahan/syafarino.jpeg"
},
{
        "id": "2",
        "nama": "Joko widodo",
        "deskripsi": "President  | College Student",
        "gambar": "https://arma.my.id/bahan/syafarino.jpeg"
}
]


GET: /users/[1]

data:{
        "id": "1",
        "nama": "An Syafarino Armawahyudi",
        "deskripsi": "UI/UX Desainer | College Stude",
        "gambar": "https://arma.my.id/bahan/syafarino.jpeg"
}

POST: /users

data:{
        "nama": "Aji Wahyudi",
        "deskripsi": "Owner | College Student",
        "gambar": "https://arma.my.id/bahan/syafarino.jpeg"
}


PUT: /users[2]

data:{
        "nama": "Rahmadani Armawahyudi",
        "deskripsi": "President  | College Student",
        "gambar": "https://arma.my.id/bahan/syafarino.jpeg"
}



<!--  Tabel Portofolio -->

GET: /portofolio

data:[
{
        "id": "1",
        "title01": "Tentang",
        "desk01": "Perkenalkan nama saya An syafarino biasa di panggil rino. Saya adalah anak pertama dengan kelahiran 2002. Tepat pada 1 Mei 2002 saya dilahirkan. Rahma, Deca merupakan panggilan kedua adikku. Keduanya adalah wanita wanita hebat yang dianugerahkan kepadaku sebagai anak pertama dalam keluarga.\r\n\r\nTepat pada awal Mei kemarin diriku bertambah usia, yang sebelumnya 19 tahun beranjak ke kehidupan kepala dua. Saat ini aku mengenyam bangk perkuliahan di salah satu kampus swasta di kota seribu serindu, apakah anda tau di mana itu? yaps yogyakarta namanya. Sistem informasi menjadi bidang yang ingin kutekuni, dengan segenap hiruk pikuk perkembangan teknologi pada saat ini menjadi salah satu dari beribu alasan ku memenentukan jalan. Waktu SMA telah kulalui, dengan banyak cerita yang masih lekat teringat jelas dengan segala baik buruknya. Banyak pengalaman yang tlah kulewati hingga posisi saat ini, mulai dari siswa hinga mencari kerja tuk mencukupi kebutuhan mahasiswa.\r\n\r\nOrganisasi mahasiswa menjad",
        "title02": "Pendidikan",
        "sub_title01": "MAN INSAN CENDEKIA BATAM",
        "sub_desk01": "Sambau, Kecamatan Nongsa, Kota Batam, Kepulauan Riau 29465",
        "sub_title02": "UNIVERSITAS AHMAD DAHLAN",
        "sub_desk02": "Jl. Ringroad Selatan, Kragilan, Tamanan, Kec. Banguntapan, Kabupaten Bantul, Daerah Istimewa Yogyaka"
},

{
      "id": "4",
      "title01": "Soft skill",
      "desk01": "Saya memiliki beberapa softskill",
      "title02": "Rincian",
      "sub_title01": "Leading",
      "sub_desk01": "Saya mampu memimpin sesuatu",
      "sub_title02": "Critical Thingking",
      "sub_desk02": "Saya memiliki ke mampuan dan kelebihan dalam berfikir kritis"
}
]

GET: /portofolio/[1]

data:{
      "id": "1",
      "title01": "Tentang",
      "desk01": "Perkenalkan nama saya An syafarino biasa di panggil rino. Saya adalah anak pertama dengan kelahiran 2002. Tepat pada 1 Mei 2002 saya dilahirkan. Rahma, Deca merupakan panggilan kedua adikku. Keduanya adalah wanita wanita hebat yang dianugerahkan kepadaku sebagai anak pertama dalam keluarga.\r\n\r\nTepat pada awal Mei kemarin diriku bertambah usia, yang sebelumnya 19 tahun beranjak ke kehidupan kepala dua. Saat ini aku mengenyam bangk perkuliahan di salah satu kampus swasta di kota seribu serindu, apakah anda tau di mana itu? yaps yogyakarta namanya. Sistem informasi menjadi bidang yang ingin kutekuni, dengan segenap hiruk pikuk perkembangan teknologi pada saat ini menjadi salah satu dari beribu alasan ku memenentukan jalan. Waktu SMA telah kulalui, dengan banyak cerita yang masih lekat teringat jelas dengan segala baik buruknya. Banyak pengalaman yang tlah kulewati hingga posisi saat ini, mulai dari siswa hinga mencari kerja tuk mencukupi kebutuhan mahasiswa.\r\n\r\nOrganisasi mahasiswa menjad",
      "title02": "Pendidikan",
      "sub_title01": "MAN INSAN CENDEKIA BATAM",
      "sub_desk01": "Sambau, Kecamatan Nongsa, Kota Batam, Kepulauan Riau 29465",
      "sub_title02": "UNIVERSITAS AHMAD DAHLAN",
      "sub_desk02": "Jl. Ringroad Selatan, Kragilan, Tamanan, Kec. Banguntapan, Kabupaten Bantul, Daerah Istimewa Yogyaka"
}


POST: /portofolio

data:{
      "title01": "Soft skill",
      "desk01": "Saya memiliki beberapa softskill",
      "title02": "Rincian",
      "sub_title01": "Leading",
      "sub_desk01": "Saya mampu memimpin sesuatu",
      "sub_title02": "Critical Thingking",
       "sub_desk02": "Saya memiliki ke mampuan dan kelebihan dalam berfikir kritis"
}

PUT: /portofolio/[6]

data:{
      "title01": "Soft skill",
      "desk01": "Saya memiliki beberapa softskill",
       "title02": "Rincian",
      "sub_title01": "Problem Solving",
      "sub_desk01": "Saya mampu melihat masalah dengan nbaik dan menyelesaikannya dengan cermat",
      "sub_title02": "Critical Thingking",
      "sub_desk02": "Saya memiliki ke mampuan dan kelebihan dalam berfikir kritis"
}


<!--  Tabel Artikel -->

GET: /artikel

data:[
{
      "id": "1",
      "title": "Cascading Style Sheets (CSS)",
      "gambar": "https://arma.my.id/bahan/css.png",
      "sub_title": "Apakah kamu tahu apa itu CSS?",
      "desk": "Cascading Style Sheet merupakan aturan untuk mengatur beberapa komponen dalam sebuah web sehingga akan lebih terstruktur dan seragam."
},
{
      "id": "2",
      "title": "Hypertext Markup Language (HTM",
      "gambar": "https://arma.my.id/bahan/html.jpg",
      "sub_title": "Apakah kamu tahu apa itu HTML?",
      "desk": "Hypertext Markup Language adalah bahasa markah standar untuk dokumen yang dirancang untuk ditampilkan di peramban internet."
},
{
      "id": "3",
      "title": "JavaScript",
      "gambar": "https://arma.my.id/bahan/js.png",
      "sub_title": "Apakah kamu tahu apa itu JS?",
      "desk": "JavaScript adalah bahasa pemrograman tingkat tinggi dan dinamis. JavaScript populer di internet dan dapat bekerja di sebagian besar penjelajah web populer seperti Google Chrome,"
},
{
      "id": "4",
      "title": "Cascading Style Sheets (CSS)",
      "gambar": "https://arma.my.id/bahan/css.png",
      "sub_title": "https://arma.my.id/bahan/css.png",
      "desk": "Cascading Style Sheet merupakan aturan untuk mengatur beberapa komponen dalam sebuah web sehingga akan lebih terstruktur dan seragam."
},
{
      "id": "5",
      "title": "Hypertext Markup Language (HTML)",
      "gambar": "https://arma.my.id/bahan/html.jpg",
      "sub_title": "Apakah kamu tahu apa itu HTML?",
      "desk": "Hypertext Markup Language adalah bahasa markah standar untuk dokumen yang dirancang untuk ditampilkan di peramban internet."
},
{
      "id": "6",
      "title": "JavaScript",
      "gambar": "https://arma.my.id/bahan/js.png",
      "sub_title": "Apakah kamu tahu apa itu JS?",
      "desk": "JavaScript adalah bahasa pemrograman tingkat tinggi dan dinamis. JavaScript populer di internet dan dapat bekerja di sebagian besar penjelajah web populer seperti Google Chrome,"
}
]


GET: /artikel/[2]

data:{
      "id": "2",
      "title": "Hypertext Markup Language (HTM",
      "gambar": "https://arma.my.id/bahan/html.jpg",
      "sub_title": "Apakah kamu tahu apa itu HTML?",
      "desk": "Hypertext Markup Language adalah bahasa markah standar untuk dokumen yang dirancang untuk ditampilkan di peramban internet."
}


POST: /artikel

data:{
      "title": "Python",
      "gambar": "https://arma.my.id/bahan/js.png",
      "sub_title": "Apakah kamu tahu apa itu py?",
      "desk": "Python adalah bahasa pemrograman tingkat tinggi dan dinamis. JavaScript populer di internet dan dapat bekerja di sebagian besar penjelajah web populer seperti Google Chrome,"
}


PUT: /artikel/[8]

data:{
      "title": "C++",
      "gambar": "https://arma.my.id/bahan/js.png",
      "sub_title": "Apakah kamu tahu apa itu C++?",
      "desk": "C++ adalah bahasa pemrograman tingkat tinggi dan dinamis. JavaScript populer di internet dan dapat bekerja di sebagian besar penjelajah web populer seperti Google Chrome,"
}



<!--  Tabel Hardskill -->

GET: /hardskill

data:[
{
      "id": "2",
      "title": "Figma",
      "desk": "Saya senang dibidang desain terutama UI/UX desain, dengan begitu saya mempelajari salah satu framework bernama figma dan sudah menyelesaikan beberapa projek prototype dengan menggunakan figma."
},
{
      "id": "3",
      "title": "HTML",
      "desk": "Saya juga sedang menekuni front end development sehingga saya mempelajari HTML atau yang biasa di sebut Hypertext Markup Language. Bahasa markup yang digunakan untuk membuat sebuah halaman web."
},
{
      "id": "4",
      "title": "CSS",
      "desk": "Saya juga sedang menekuni front end development sehingga saya mempelajari CSS atau yang biasa di sebut Cascading Style Sheet. CSS akan menggubakan komponennya untuk membuat sebuah web lebih terstruktur dan seragam."
},
{
      "id": "5",
      "title": "Javascript",
      "desk": "JavaScript adalah bahasa pemrograman yang digunakan dalam pengembangan website agar lebih dinamis dan interaktif. Bahkan dengan JavaScript ini kamu bisa membuat aplikasi, tools, atau bahkan game pada web"
}
]

GET: /portofolio/[2]

data:{
      "id": "2",
      "title": "Figma",
      "desk": "Saya senang dibidang desain terutama UI/UX desain, dengan begitu saya mempelajari salah satu framework bernama figma dan sudah menyelesaikan beberapa projek prototype dengan menggunakan figma."
}

POST: /hardskill

data:{
      "title": "Python",
      "desk": "Python adalah bahasa pemrograman yang digunakan dalam pengembangan website agar lebih dinamis dan interaktif. Bahkan dengan JavaScript ini kamu bisa membuat aplikasi, tools, atau bahkan game pada web"
}

PUT: /artikel/[7]

data:{
      "title": "C++",
      "desk": "C++ adalah bahasa pemrograman yang digunakan dalam pengembangan website agar lebih dinamis dan interaktif. Bahkan dengan JavaScript ini kamu bisa membuat aplikasi, tools, atau bahkan game pada web"
}


```
