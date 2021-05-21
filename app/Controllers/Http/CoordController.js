'use strict'
const opencage = use('opencage-api-client') // 2500 requests/day

class CoordController {
    async index({request, response, view}) {

        return view.render('coord')
    }

    async locate({request, response, view}) {
      const addressData = request.only(['address'])
      console.log('address',addressData)
      let data = await opencage.geocode({q: addressData.address })
          if (data.status.code === 200) {
            if (data.results.length > 0) {
              var place = data.results[0];
              let result =  place.geometry
              console.log('lat , lng: ', result)
              // return response.send('coord', { result })
              return view.render('coord', { result })
              }
            } else if (data.status.code === 402) {
              console.log('hit free trial daily limit');
              console.log('become a customer: https://opencagedata.com/pricing');
              return response.json(status)
            } else {
              // other possible response codes:
              // https://opencagedata.com/api#codes
              console.log('error', data.status.message);
            }
          };
    }


module.exports = CoordController




