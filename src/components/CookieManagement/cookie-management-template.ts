import createFragment from "../../utils/create-fragment";

const cookieManagementTemplate = String.raw`
    <div class="container">
        <section class="group">
            <h3>Simple values: </h3>
            <div class="input-group">
                <div>Name of cookie: </div>
                <input type="string" name="cookie-name" id="cookie-name" />
            </div>
            <div class="input-group">
                <div>Value of cookie: </div>
                <input type="string" name="cookie-value" id="cookie-value" />
            </div>
        </section>
        <section class="group">
            <h3>Options values: </h3>
            <div class="input-group">
                <div>Expires: </div>
                <input type="date" name="cookie-expires" id="cookie-expires" />
            </div>
            <div class="input-group">
                <div>Path: </div>
                <input type="string" name="cookie-path" id="cookie-path" />
            </div>
            <div class="input-group">
                <div>Domain: </div>
                <input type="string" name="cookie-domain" id="cookie-domain" />
            </div>
            <div class="input-group">
                <div>Secure: </div>
                <input type="string" name="cookie-secure" id="cookie-secure" />
            </div>
        </section>
        <section class="results"></section>
        <section class="group">
            <button class="btn create">create cookie</button>
            <button class="btn get-cookie">get cookie</button>
            <button class="btn delete-cookie">delete cookie</button>
            <button class="btn delete-all-cookie">delete all</button>
            <button class="btn get-all-cookie">get all</button>
        </section>
    </div>
`;

export default createFragment(cookieManagementTemplate); 