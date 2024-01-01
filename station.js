function addStation()
{
  d3.select('svg g')
  .selectAll('circle')
  .data(station)
  .enter()
  .append('circle')
    .attr("cx", d=>proj([d.lon_decimal,d.lat_decimal])[0])
    .attr("cy", d=>proj([d.lon_decimal,d.lat_decimal])[1])
    .attr("id",d=> d.name)
    .attr('fill',"red")
    .attr("r", 2);

}
var station=[
    {
      "name": "BLIDA",
      "city": "BLIDA",
      "lon_decimal": 2.814,
      "lat_decimal": 36.504
    },
    {
      "name": "BOU SAADA",
      "city": "BOU SAADA",
      "lon_decimal": 4.206,
      "lat_decimal": 35.333
    },
    {
      "name": "SOUMMAM",
      "city": "BEJAJA",
      "lon_decimal": 5.07,
      "lat_decimal": 36.712
    },
    {
      "name": "HOUARI BOUMEDIENE",
      "city": "ALGIER",
      "lon_decimal": 3.215,
      "lat_decimal": 36.691
    },
    {
      "name": "TISKA",
      "city": "DJANET",
      "lon_decimal": 9.452,
      "lat_decimal": 24.293
    },
    {
      "name": "BOUFARIK",
      "city": "BOUFARIK",
      "lon_decimal": 2.876,
      "lat_decimal": 36.546
    },
    {
      "name": "TELERGHMA",
      "city": "TELERGMA",
      "lon_decimal": 6.364,
      "lat_decimal": 36.109
    },
    {
      "name": "REGGANE",
      "city": "REGGAN",
      "lon_decimal": 0.286,
      "lat_decimal": 26.71
    },
    {
      "name": "ILLIZI",
      "city": "ILLIZI",
      "lon_decimal": 8.484,
      "lat_decimal": 26.573
    },
    {
      "name": "AIN OUSSERA",
      "city": "AIN OUSSERA",
      "lon_decimal": 2.879,
      "lat_decimal": 35.525
    },
    {
      "name": "SETIF AIN ARNAT",
      "city": "SETIF",
      "lon_decimal": 5.324,
      "lat_decimal": 36.178
    },
    {
      "name": "TAMANRASSET",
      "city": "TAMANRASSET",
      "lon_decimal": 5.451,
      "lat_decimal": 22.811
    },
    {
      "name": "JIJEL",
      "city": "JIJEL",
      "lon_decimal": 5.873,
      "lat_decimal": 36.795
    },
    {
      "name": "MECHERIA",
      "city": "MECHERIA",
      "lon_decimal": -0.242,
      "lat_decimal": 33.536
    },
    {
      "name": "RELIZANE",
      "city": "RELIZANE",
      "lon_decimal": 0.626,
      "lat_decimal": 35.752
    },
    {
      "name": "ANNABA",
      "city": "ANNABA",
      "lon_decimal": 7.809,
      "lat_decimal": 36.822
    },
    {
      "name": "MOHAMED BOUDIAF INTERNATIONAL",
      "city": "CONSTANTINE",
      "lon_decimal": 6.624,
      "lat_decimal": 36.277
    },
    {
      "name": "CHEIKH LARBI TEBESSI",
      "city": "TEBESSA",
      "lon_decimal": 8.121,
      "lat_decimal": 35.431
    },
    {
      "name": "HASSI R MEL",
      "city": "TILREMPT",
      "lon_decimal": 3.312,
      "lat_decimal": 32.93
    },
    {
      "name": "BOU CHEKIF",
      "city": "TIARET",
      "lon_decimal": 1.463,
      "lat_decimal": 35.341
    },
    {
      "name": "BOU SFER",
      "city": "BOU SFER",
      "lon_decimal": -0.805,
      "lat_decimal": 35.735
    },
    {
      "name": "TINDOUF",
      "city": "TINDOUF",
      "lon_decimal": -8.167,
      "lat_decimal": 27.7
    },
    {
      "name": "ECH CHELIFF",
      "city": "ECH-CHELIFF",
      "lon_decimal": 1.332,
      "lat_decimal": 36.213
    },
    {
      "name": "TAFARAOUI",
      "city": "ORAN",
      "lon_decimal": -0.532,
      "lat_decimal": 35.542
    },
    {
      "name": "ZENATA",
      "city": "TLEMCEN",
      "lon_decimal": -1.45,
      "lat_decimal": 35.017
    },
    {
      "name": "ES SENIA",
      "city": "ORAN",
      "lon_decimal": -0.621,
      "lat_decimal": 35.624
    },
    {
      "name": "SIDI BEL ABBES",
      "city": "SIDI BEL ABBES",
      "lon_decimal": -0.593,
      "lat_decimal": 35.172
    },
    {
      "name": "GHRISS",
      "city": "GHRISS",
      "lon_decimal": 0.147,
      "lat_decimal": 35.208
    },
    {
      "name": "TOUAT CHEIKH SIDI MOHAMED BELKEBIR",
      "city": "ADRAR",
      "lon_decimal": -0.186,
      "lat_decimal": 27.837
    },
    {
      "name": "BISKRA",
      "city": "BISKRA",
      "lon_decimal": 5.738,
      "lat_decimal": 34.793
    },
    {
      "name": "EL GOLEA",
      "city": "EL GOLEA",
      "lon_decimal": 2.859,
      "lat_decimal": 30.571
    },
    {
      "name": "NOUMERATE",
      "city": "GHARDAIA",
      "lon_decimal": 3.794,
      "lat_decimal": 32.384
    },
    {
      "name": "OUED IRARA",
      "city": "HASSI-MESSAOUD",
      "lon_decimal": 6.14,
      "lat_decimal": 31.673
    },
    {
      "name": "IN SALAH",
      "city": "IN SALAH",
      "lon_decimal": 2.512,
      "lat_decimal": 27.251
    },
    {
      "name": "SIDI MAHDI",
      "city": "TOUGGOURT",
      "lon_decimal": 6.089,
      "lat_decimal": 33.068
    },
    {
      "name": "LAGHOUAT",
      "city": "LAGHOUAT",
      "lon_decimal": 2.927,
      "lat_decimal": 33.764
    },
    {
      "name": "TIMIMOUN",
      "city": "TIMIMOUN",
      "lon_decimal": 0.276,
      "lat_decimal": 29.237
    },
    {
      "name": "OUARGLA",
      "city": "OUARGLA",
      "lon_decimal": 5.413,
      "lat_decimal": 31.917
    },
    {
      "name": "IN AMENAS",
      "city": "ZARZAITINE",
      "lon_decimal": 9.643,
      "lat_decimal": 28.051
    }
  ]