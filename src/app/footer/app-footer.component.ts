import { Component } from '@angular/core';


@Component ({
	selector: 'app-footer',
    template: `
        <footer>
            <small class="flex-container text-dark">
              <p>All rights reserved: &copy; Integral 2019</p>
            </small>
        </footer>
    `,
    styles: [`
                .flex-container{
                    display: flex;
                    flex-direction: row;
                    align-item: center;
                    justify-content: center;
                    height: 100px;
                    background: #f1f1f1;
                    width: 100%;
                    padding: 50px;
                    position: fixed;
                    bottom: 0;
                }
                .flex-container p {
                   text-align: center; 
                }
            `]
})
export class FooterComponent{}