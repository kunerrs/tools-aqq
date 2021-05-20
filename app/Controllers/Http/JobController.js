'use strict'

const Job = use('App/Models/Job')
class JobController {
    async home({request, view, response}) {

        // const job = await Job.create({
        //     'title' : 'Floor Manager',
        //     'link' : 'https://google.com',
        //     'job_description' : 'Mongadonis job description.'
        // }) 


        const jobs = await Job.all()

        return view.render('index', { jobs : jobs.toJSON() })
    }
}

module.exports = JobController
