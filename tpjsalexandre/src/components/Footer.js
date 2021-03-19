import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Footer extends Component {

    render(){
        return <footer class="text-center text-white">

              <div className="ui icon input">

                <section class="mb-4">

                  <a class="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="#!"
                    role="button"
                    data-mdb-ripple-color="dark"><i class="fab fa-facebook-f"></i></a>


                </section>

              </div>


            </footer>


    }
}