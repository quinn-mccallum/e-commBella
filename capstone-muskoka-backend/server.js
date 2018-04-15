const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const stripe = require('stripe');
const knex = require('knex')({
    client: 'postgres',
    connection: {
      host     : '127.0.0.1',
      user     : 'postgres',
      password : 'postgres',
      database : 'quizzno',
      charset  : 'utf8'
    }
  });

const bookshelf = require('bookshelf')(knex);

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
})

const Booking = bookshelf.Model.extend({
    tableName: 'bookings',
})


// ADD NEW BOOKING TO DB
app.post('/booking', (req, res) => {
    console.log(req.body);
    res.json(req.body);
    const newBooking = new Booking({
        email: req.body.email,
        address1: req.body.addressOne,
        address2: req.body.addressTwo,
        city: req.body.city,
        prov_state: req.body.provinceState,
        country: req.body.country,
        postal_zip: req.body.postalZip,
        title: req.body.title[0],
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        phone: req.body.phoneOne,
        phone2: req.body.phoneTwo,
        arrival_date: req.body.dates[0],
        departure_date: req.body.dates[1],
        total_guests: req.body.totalGuests[0],
        adult_guests: req.body.adultGuests[0],
        kid_guests: req.body.childGuests[0],
        pet_amt: req.body.petAmt[0],
        pet_type: req.body.petsType,
        comments: req.body.comments
    })
    newBooking.save()
        .then(booking => {
            console.log(booking);
            res.status(200).json(booking);
        })
        .catch(error => {
            console.log(error);
        })
});


app.get('/booking', (req, res) => {
    Booking.fetchAll()
        .then(results => {
            let bookedDates = results.map(booking=>{return {arrival_date: booking.attributes.arrival_date, departure_date: booking.attributes.departure_date}});
            res.json(bookedDates);
        })
})


// DELETE/CANCEL BOOKING
// new Booking({arrival_date: ''})



app.listen(8080, () => {
    console.log('Server listening on port 8080');
    console.log('Press control + C to stop server');
});
