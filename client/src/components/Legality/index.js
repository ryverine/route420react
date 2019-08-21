import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import React, {Component} from 'react';
import {Dialog} from 'primereact/dialog';
import {Button} from 'primereact/button';

export class Legality extends Component {
        
    constructor() {
        super();
        this.state = {visible: false};
        this.onClick = this.onClick.bind(this);
        this.onHide = this.onHide.bind(this);
    }

    onClick() {
        this.setState({visible: true});
    }

    onHide() {
        this.setState({visible: false});
    }

    render() {
        const footer = (
            <div>
                <Button label="Awesome!" icon="pi pi-check" onClick={this.onHide} />
            </div>
        );

        return (
            <div>


                <div className="content-section implementation">
                    <Dialog header="Legal Disclaimer" visible={this.state.visible} style={{width: '50vw'}} footer={footer} onHide={this.onHide} maximizable>
                    <h1>Curious about the laws regarding Hemp in North Carolina?</h1>
                    <p>
                        Hemp production has been legalized in North Carolina but only as part of the <a href="https://www.ncagr.gov/hemp/index.htm"> <strong>Industrial Hemp Pilot Program</strong> </a> authorized in 2014.
                    </p>

                        <ul>
                            <li>You need to apply for a Grower's license to grow hemp in North Carolina.</li>

                            <li>To watch an informative video about the N.C. Industrial Hemp Program, please visit <a href="https://youtu.be/2Xj_LaUa4Ac?t=360"> https://youtu.be/2Xj_LaUa4Ac?t=360</a>.</li>

                            <li>No license is required to be a processor in North Carolina. However, the state does maintain a registration list of first-stage processors. For instructions on registering as a hemp processor, and to view the registration requirements, please visit <a href="http://www.ncagr.gov/hemp/ProcessorsInfo.htm"> http://www.ncagr.gov/hemp/ProcessorsInfo.htm </a> .</li>

                            <li>For information on getting hemp seed/clones for planting, please visit <a href="https://industrialhemp.ces.ncsu.edu/seed-sources-for-planting/"> https://industrialhemp.ces.ncsu.edu/seed-sources-for-planting/ </a> .</li>

                            <li>To view the Hemp Connections "Want-Ads" page, please visit <a href="https://industrialhemp.ces.ncsu.edu/hemp-connections/"> https://industrialhemp.ces.ncsu.edu/hemp-connections/ </a> .</li>

                            <li>For more information about the permitting process, contact the Industrial Hemp Commission at (919) 707-3236.</li>
                        </ul>
                        <p>For application-related questions, including to make changes to your license, to pay fees, or to notify that your plants are flowering, please email <u><a href="mailto:IndustrialHempRequests@NCagr.gov">IndustrialHempRequests@NCagr.gov</a></u></p>
                        For more information about the permitting process, contact the Industrial Hemp Commission at <strong>(919) 707-3236</strong>.
                    </Dialog>
                
                    <Button label="Legal Disclaimer" icon="pi pi-external-link" onClick={this.onClick} className="LegalityButton" />
                </div>
            </div>
        )
    }
}

export default Legality;