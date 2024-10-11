const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')

// Halaman utama
app.get('', (req, res) => {
    res.render('index', {
      judul: 'Aplikasi Cek Cucaca',
      nama: 'Ade Adinda'
    })
  })

// Halaman bantuan
app.get('/bantuan', (req, res) => {
    res.render('bantuan', {
        judul: 'Halaman Bantuan',
        nama: 'Ade Adinda',
        teksBantuan: 'ini adalah teks bantuan'
    })
})

// Halaman cuaca
app.get('/infoCuaca', (req, res) => {
    res.send([{
        prediksiCuaca: 'cuaca berpotensi hujan',
        lokasi: 'Padang'
    }])    
})

// Halaman tentang
app.get('/tentang', (req, res) => {
    res.render('tentang', {
        judul: 'Tentang Saya',
        nama: 'Ade Adinda'
    })
})

// Mengatur direktori public untuk file statis
const direktoriPublic = path.join(__dirname, '../public')
const direktoriViews = path.join(__dirname, '../templates/views')
const direktoriPartials = path.join(__dirname, '../templates/partials')

//setupdirektori statis
app.set('view engine', 'hbs')
app.set('views', direktoriViews)
hbs.registerPartials(direktoriPartials)

//setup direktori
app.use(express.static(direktoriPublic))


//port jalankan
app.listen(4000, () => {
    console.log('Server berjalan pada port 4000.')
})   