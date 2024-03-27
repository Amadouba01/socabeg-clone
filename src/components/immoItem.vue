<template>
    <div>
        <section id="immo-items-container">
            <div class="container">
                <div class="immo-items-container">
                    <div class="realisation-container">
                        <div class="image">
                            <a href="#">
                                <img src="../assets/images/Les maisons du lac.jpeg" alt="">
                            </a>
                        </div>
                        <div class="card">
                            <div class="text">
                                <a href="#">
                                    <h2>Les maisons du Lac</h2>
                                </a>
                            </div>
                            <div class="option">
                                <div class="option-item bed">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        data-v-40bd49ea="">
                                        <rect width="32" height="32" fill="url(#pattern0)" data-v-40bd49ea=""></rect>
                                        <defs data-v-40bd49ea="">
                                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1"
                                                height="1" data-v-40bd49ea="">
                                                <use xlink:href="#image0_318_2564" transform="scale(0.00195312)"
                                                    data-v-40bd49ea=""></use>
                                            </pattern>
                                            <image id="image0_318_2564" width="512" height="512"
                                                xlink:href="data:image/png;base64,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"
                                                data-v-40bd49ea=""></image>
                                        </defs>
                                    </svg>
                                    4
                                </div>
                                <div class="option-item parking">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        version="1.1" id="Layer_1" x="0px" y="0px" width="32" height="32"
                                        viewBox="0 0 503.607 503.607" xml:space="preserve"
                                        style="enable-background: new 0 0 503.607 503.607" data-v-40bd49ea="">
                                        <g transform="translate(1 1)" data-v-40bd49ea="">
                                            <g data-v-40bd49ea="">
                                                <g data-v-40bd49ea="">
                                                    <path
                                                        d="M368.311,410.279v-92.328c0-14.269-10.911-25.18-25.18-25.18h-4.197c-4.197,0-7.554-2.518-8.393-5.875l-29.377-102.4     v-0.839c-6.715-15.108-21.823-25.18-38.61-25.18H104.757c-16.787,0-31.895,10.072-38.61,25.18v0.839l-29.377,102.4     c-1.679,3.357-5.036,5.875-8.393,5.875H24.18C9.911,292.771-1,303.682-1,317.951v92.328c0,14.269,10.911,25.18,25.18,25.18     v41.967c0,14.269,10.911,25.18,25.18,25.18h16.787c14.269,0,25.18-10.911,25.18-25.18v-41.967h184.656v41.967     c0,14.269,10.911,25.18,25.18,25.18h16.787c14.269,0,25.18-10.911,25.18-25.18v-41.967     C357.4,435.459,368.311,424.548,368.311,410.279z M74.541,477.426c0,5.036-3.357,8.393-8.393,8.393H49.361     c-5.036,0-8.393-3.357-8.393-8.393v-41.967h33.574V477.426z M326.344,477.426c0,5.036-3.357,8.393-8.393,8.393h-16.787     c-5.036,0-8.393-3.357-8.393-8.393v-41.967h33.574V477.426z M351.525,410.279c0,5.036-3.357,8.393-8.393,8.393h-8.393h-50.361     H82.934H32.574H24.18c-5.036,0-8.393-3.357-8.393-8.393v-92.328c0-5.036,3.357-8.393,8.393-8.393h4.197     c10.911,0,20.984-7.554,24.341-18.466l29.377-101.561c4.197-8.393,12.59-14.269,22.662-14.269h157.797     c9.233,0,18.466,5.036,22.662,14.269l29.377,101.561c3.357,10.911,13.43,18.466,24.341,18.466h4.197     c5.036,0,8.393,3.357,8.393,8.393V410.279z"
                                                        data-v-40bd49ea=""></path>
                                                    <path
                                                        d="M74.541,326.344c-18.466,0-33.574,15.108-33.574,33.574s15.108,33.574,33.574,33.574s33.574-15.108,33.574-33.574     S93.007,326.344,74.541,326.344z M74.541,376.705c-9.233,0-16.787-7.554-16.787-16.787s7.554-16.787,16.787-16.787     s16.787,7.554,16.787,16.787S83.774,376.705,74.541,376.705z"
                                                        data-v-40bd49ea=""></path>
                                                    <path
                                                        d="M292.771,326.344c-18.466,0-33.574,15.108-33.574,33.574s15.108,33.574,33.574,33.574s33.574-15.108,33.574-33.574     S311.236,326.344,292.771,326.344z M292.771,376.705c-9.233,0-16.787-7.554-16.787-16.787s7.554-16.787,16.787-16.787     c9.233,0,16.787,7.554,16.787,16.787S302.003,376.705,292.771,376.705z"
                                                        data-v-40bd49ea=""></path>
                                                    <path
                                                        d="M200.443,368.311h-33.574c-5.036,0-8.393,3.357-8.393,8.393c0,5.036,3.357,8.393,8.393,8.393h33.574     c5.036,0,8.393-3.357,8.393-8.393C208.836,371.669,205.479,368.311,200.443,368.311z"
                                                        data-v-40bd49ea=""></path>
                                                    <path
                                                        d="M217.229,334.738h-67.148c-5.036,0-8.393,3.357-8.393,8.393c0,5.036,3.357,8.393,8.393,8.393h67.148     c5.036,0,8.393-3.357,8.393-8.393C225.623,338.095,222.266,334.738,217.229,334.738z"
                                                        data-v-40bd49ea=""></path>
                                                    <path
                                                        d="M103.079,292.771h161.993c5.036,0,10.072-2.518,13.43-6.715s4.197-10.072,2.518-15.108L260.875,203.8     c-1.679-6.715-8.394-11.751-15.948-11.751H123.223c-7.554,0-13.43,4.197-15.948,11.751l-20.144,67.148     c-1.679,5.036-0.839,10.911,2.518,15.108C93.007,290.252,98.043,292.771,103.079,292.771z M123.223,208.836h121.705     l20.144,67.148H103.079L123.223,208.836z"
                                                        data-v-40bd49ea=""></path>
                                                    <path
                                                        d="M494.213-1H351.525c-5.036,0-8.393,3.357-8.393,8.393v142.689c0,5.036,3.357,8.393,8.393,8.393h58.754v260.197h-16.787     c-5.036,0-8.393,3.357-8.393,8.393v25.18h-16.787c-5.036,0-8.393,3.357-8.393,8.393v33.574c0,5.036,3.357,8.393,8.393,8.393     h100.721c5.036,0,8.393-3.357,8.393-8.393v-33.574c0-5.036-3.357-8.393-8.393-8.393h-16.787v-25.18     c0-5.036-3.357-8.393-8.393-8.393h-16.787V158.475h67.148c5.036,0,8.393-3.357,8.393-8.393V7.393     C502.607,2.357,499.249-1,494.213-1z M460.639,485.82h-83.934v-16.787h16.787h50.361h16.787V485.82z M435.459,452.246h-33.574     v-16.787h33.574V452.246z M485.82,141.689H359.918V15.787H485.82V141.689z"
                                                        data-v-40bd49ea=""></path>
                                                    <path
                                                        d="M410.279,124.902c5.036,0,8.393-3.357,8.393-8.393V99.721h8.393c18.466,0,33.574-15.108,33.574-33.574     c0-18.466-15.108-33.574-33.574-33.574h-16.787c-5.036,0-8.393,3.357-8.393,8.393v50.361v25.18     C401.885,121.544,405.243,124.902,410.279,124.902z M443.852,66.148c0,9.233-7.554,16.787-16.787,16.787h-8.393V49.361h8.393     C436.298,49.361,443.852,56.915,443.852,66.148z"
                                                        data-v-40bd49ea=""></path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                    2
                                </div>
                                <div class="option-item pool">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        version="1.1" id="Capa_1" x="0px" y="0px" width="32" height="32"
                                        viewBox="0 0 367.928 367.928" xml:space="preserve"
                                        style="enable-background: new 0 0 367.928 367.928" data-v-40bd49ea="">
                                        <g data-v-40bd49ea="">
                                            <g data-v-40bd49ea="">
                                                <path
                                                    d="M367.928,108.589c0-3.866-3.134-7-7-7h-52.529V61.497c0.047-0.718,0.496-6.084,3.566-11.1    c4.119-6.727,11.002-9.859,21.036-9.583c5.459,0.152,12.648,1.244,15.893,5.583c3.208,4.292,1.634,10.425,1.635,10.424    c-1.063,3.717,1.09,7.592,4.807,8.654c3.716,1.061,7.592-1.09,8.654-4.807c0.365-1.278,3.363-12.767-3.751-22.477    c-5.273-7.198-14.307-11.024-26.849-11.372c-19.4-0.548-29.061,8.89-33.74,16.895c-4.841,8.284-5.221,16.487-5.248,17.396    c-0.002,0.07-0.003,0.141-0.003,0.211v40.268h-95.157V61.498c0.047-0.719,0.497-6.084,3.568-11.1    c4.121-6.728,11.003-9.859,21.039-9.583c5.459,0.152,12.648,1.243,15.893,5.583c3.208,4.292,1.634,10.425,1.635,10.424    c-1.063,3.717,1.09,7.592,4.807,8.654c3.718,1.061,7.592-1.09,8.654-4.807c0.365-1.278,3.363-12.767-3.751-22.477    c-5.274-7.198-14.307-11.024-26.849-11.373c-19.418-0.538-29.063,8.89-33.742,16.895c-4.843,8.283-5.224,16.487-5.251,17.395    c-0.002,0.071-0.003,0.141-0.003,0.212v40.268H7c-3.866,0-7,3.134-7,7v119.964c0.219,3.669,3.276,6.578,7,6.578    c10.206,0,14.941,3.747,20.937,8.49c6.82,5.395,14.55,11.51,29.624,11.51s22.803-6.115,29.622-11.511    c5.995-4.743,10.73-8.489,20.935-8.489s14.94,3.747,20.936,8.49c6.819,5.395,14.549,11.51,29.622,11.51    c15.075,0,22.805-6.115,29.624-11.511c5.995-4.743,10.732-8.489,20.937-8.489c10.206,0,14.941,3.747,20.937,8.49    c6.82,5.395,14.549,11.51,29.623,11.51c15.075,0,22.806-6.115,29.626-11.51c5.996-4.744,10.732-8.49,20.94-8.49    c10.207,0,14.943,3.747,20.941,8.49c6.819,5.395,14.554,11.154,29.625,11.51c4.036,0.095,7-3.134,7-7    c0-0.044-0.006-0.085-0.007-0.129c0.002,0,0.005-0.001,0.007-0.002V108.589z M185.241,125.589v102.815    c-2.012,1.381-3.852,2.833-5.627,4.236c-5.996,4.744-10.732,8.49-20.938,8.49c-10.205,0-14.94-3.747-20.936-8.489    c-6.819-5.395-14.548-11.511-29.622-11.511c-15.073,0-22.803,6.115-29.622,11.51c-5.995,4.743-10.73,8.49-20.936,8.49    c-10.206,0-14.941-3.747-20.938-8.49C33,229.774,29.106,226.714,24,224.47c-0.681-0.299-1.386-0.581-2.111-0.849    c-0.071-0.026-0.142-0.053-0.213-0.079c-0.74-0.268-1.501-0.52-2.294-0.75c-0.037-0.011-0.076-0.02-0.113-0.03    c-0.704-0.202-1.434-0.384-2.182-0.552c-0.194-0.044-0.39-0.087-0.587-0.128c-0.81-0.17-1.636-0.326-2.5-0.452V115.589h171.241    V125.589z M294.399,224.015c-5.629,2.276-9.794,5.565-13.662,8.625c-5.997,4.744-10.733,8.49-20.94,8.49    c-10.206,0-14.941-3.747-20.937-8.49c-6.819-5.395-14.549-11.51-29.623-11.51c-3.755,0-7.053,0.38-9.995,1.033v-17.306h95.157    V224.015z M294.399,190.858h-95.157v-30.574h95.157V190.858z M294.399,125.589v20.695h-95.157v-20.695v-10h95.157V125.589z     M339.988,232.641c-6.82-5.395-14.551-11.51-29.626-11.51c-0.675,0-1.318,0.026-1.964,0.05v-95.592v-10h45.529v10v114.816    C348.163,239.097,344.416,236.144,339.988,232.641z"
                                                    data-v-40bd49ea=""></path>
                                                <path
                                                    d="M360.928,284.13c-10.207,0-14.943-3.747-20.94-8.49c-6.82-5.395-14.551-11.51-29.626-11.51    c-15.076,0-22.806,6.115-29.626,11.51c-5.997,4.744-10.733,8.49-20.94,8.49c-10.206,0-14.941-3.747-20.937-8.49    c-6.819-5.395-14.549-11.51-29.623-11.51c-15.074,0-22.803,6.115-29.622,11.51c-5.996,4.744-10.732,8.49-20.938,8.49    c-10.205,0-14.94-3.747-20.936-8.489c-6.819-5.396-14.548-11.511-29.622-11.511c-15.073,0-22.803,6.115-29.622,11.51    c-5.995,4.743-10.73,8.49-20.936,8.49c-10.206,0-14.941-3.747-20.938-8.49C29.804,270.246,22.074,264.13,7,264.13    c-3.866,0-7,3.134-7,7s3.134,7,7,7c10.206,0,14.941,3.747,20.937,8.49c6.82,5.395,14.55,11.51,29.624,11.51    s22.803-6.115,29.622-11.511c5.995-4.743,10.73-8.489,20.935-8.489s14.94,3.747,20.936,8.49    c6.819,5.395,14.549,11.51,29.622,11.51c15.075,0,22.805-6.115,29.624-11.511c5.995-4.743,10.732-8.489,20.937-8.489    c10.206,0,14.941,3.747,20.937,8.49c6.82,5.395,14.549,11.51,29.623,11.51c15.075,0,22.806-6.115,29.626-11.51    c5.996-4.744,10.732-8.49,20.94-8.49c10.207,0,14.943,3.747,20.941,8.49c6.819,5.395,14.55,11.51,29.625,11.51    c3.866,0,7-3.134,7-7S364.794,284.13,360.928,284.13z"
                                                    data-v-40bd49ea=""></path>
                                                <path
                                                    d="M360.928,327.13c-10.207,0-14.943-3.747-20.94-8.49c-6.82-5.395-14.551-11.51-29.626-11.51    c-15.076,0-22.806,6.115-29.626,11.51c-5.997,4.744-10.733,8.49-20.94,8.49c-10.206,0-14.941-3.747-20.937-8.49    c-6.819-5.395-14.549-11.51-29.623-11.51c-15.074,0-22.803,6.115-29.622,11.51c-5.996,4.744-10.732,8.49-20.938,8.49    c-10.205,0-14.94-3.747-20.936-8.489c-6.819-5.396-14.548-11.511-29.622-11.511c-15.073,0-22.803,6.115-29.622,11.51    c-5.995,4.743-10.73,8.49-20.936,8.49c-10.206,0-14.941-3.747-20.938-8.49C29.804,313.246,22.074,307.13,7,307.13    c-3.866,0-7,3.134-7,7s3.134,7,7,7c10.206,0,14.941,3.747,20.937,8.49c6.82,5.395,14.55,11.51,29.624,11.51    s22.803-6.115,29.622-11.511c5.995-4.743,10.73-8.489,20.935-8.489s14.94,3.747,20.936,8.49    c6.819,5.395,14.549,11.51,29.622,11.51c15.075,0,22.805-6.115,29.624-11.511c5.995-4.743,10.732-8.489,20.937-8.489    c10.206,0,14.941,3.747,20.937,8.49c6.82,5.395,14.549,11.51,29.623,11.51c15.075,0,22.806-6.115,29.626-11.51    c5.996-4.744,10.732-8.49,20.94-8.49c10.207,0,14.943,3.747,20.941,8.49c6.819,5.395,14.55,11.51,29.625,11.51    c3.866,0,7-3.134,7-7S364.794,327.13,360.928,327.13z"
                                                    data-v-40bd49ea=""></path>
                                            </g>
                                        </g>
                                    </svg>
                                    4
                                </div>
                                <div class="option-item gym">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        version="1.1" id="Layer_1" x="0px" y="0px" width="32" height="32"
                                        viewBox="0 0 512.001 512.001" xml:space="preserve"
                                        style="enable-background: new 0 0 512.001 512.001" data-v-40bd49ea="">
                                        <g data-v-40bd49ea="">
                                            <g data-v-40bd49ea="">
                                                <path
                                                    d="M503.351,214.272h-14.765v-12.181c0-25.301-18.441-46.365-42.587-50.49v-1.262c0-28.25-22.985-51.235-51.236-51.235    s-51.236,22.985-51.236,51.235v63.933H168.471V150.34c0-28.25-22.985-51.235-51.236-51.235S65.999,122.09,65.999,150.34v1.262    c-24.146,4.125-42.587,25.188-42.587,50.49v12.181H8.649c-4.777,0-8.649,3.872-8.649,8.649v66.158    c0,4.778,3.872,8.649,8.649,8.649h14.765v12.181c0,25.301,18.441,46.365,42.587,50.49v1.262c0,28.25,22.985,51.235,51.236,51.235    s51.236-22.985,51.236-51.235v-63.933h175.057v63.933c0,28.25,22.985,51.235,51.236,51.235c28.251,0,51.236-22.985,51.236-51.235    V360.4c24.146-4.125,42.587-25.188,42.587-50.49v-12.181h14.765c4.778,0,8.649-3.872,8.649-8.649v-66.158    C512,218.144,508.128,214.272,503.351,214.272z M23.414,280.431h-6.115v-48.86h6.115V280.431z M65.999,342.726    c-14.536-3.834-25.289-17.092-25.289-32.816V202.09c0-15.724,10.751-28.981,25.289-32.816V342.726z M151.173,361.662    c0,18.713-15.225,33.937-33.938,33.937c-18.713,0-33.938-15.224-33.938-33.937V150.339c0-18.713,15.225-33.937,33.938-33.937    c18.713,0,33.938,15.224,33.938,33.937V361.662z M183.925,280.431h-15.454v-48.86h15.454V280.431z M310.777,280.431H201.222    v-48.86h109.555V280.431z M343.529,280.431h-15.453v-48.86h15.453V280.431z M428.701,361.662    c0,18.713-15.225,33.937-33.938,33.937s-33.938-15.224-33.938-33.937V150.339c0-18.713,15.225-33.937,33.938-33.937    s33.938,15.224,33.938,33.937V361.662z M471.288,309.91L471.288,309.91c0,15.724-10.751,28.981-25.289,32.816V169.274    c14.536,3.834,25.289,17.092,25.289,32.816V309.91z M494.702,280.431h-6.115v-48.86h6.115V280.431z"
                                                    data-v-40bd49ea=""></path>
                                            </g>
                                        </g>
                                    </svg>
                                    2
                                </div>
                                <div class="details">
                                    <viewdetails />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="realisation-container">
                        <div class="image">
                            <a href="#">
                                <img src="../assets/images/Terrains viabilisés aux Almadies.jpeg" alt="">
                            </a>
                        </div>
                        <div class="card">
                            <div class="text">
                                <a href="#">
                                    <h2>Terrains viabilisés aux Almadies</h2>
                                </a>
                            </div>
                            <div class="option">
                                <div class="option-item bed">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        data-v-40bd49ea="">
                                        <rect width="32" height="32" fill="url(#pattern0)" data-v-40bd49ea=""></rect>
                                        <defs data-v-40bd49ea="">
                                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1"
                                                height="1" data-v-40bd49ea="">
                                                <use xlink:href="#image0_318_2564" transform="scale(0.00195312)"
                                                    data-v-40bd49ea=""></use>
                                            </pattern>
                                            <image id="image0_318_2564" width="512" height="512"
                                                xlink:href="data:image/png;base64,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"
                                                data-v-40bd49ea=""></image>
                                        </defs>
                                    </svg>
                                    15
                                </div>
                                <div class="option-item parking">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        version="1.1" id="Layer_1" x="0px" y="0px" width="32" height="32"
                                        viewBox="0 0 503.607 503.607" xml:space="preserve"
                                        style="enable-background: new 0 0 503.607 503.607" data-v-40bd49ea="">
                                        <g transform="translate(1 1)" data-v-40bd49ea="">
                                            <g data-v-40bd49ea="">
                                                <g data-v-40bd49ea="">
                                                    <path
                                                        d="M368.311,410.279v-92.328c0-14.269-10.911-25.18-25.18-25.18h-4.197c-4.197,0-7.554-2.518-8.393-5.875l-29.377-102.4     v-0.839c-6.715-15.108-21.823-25.18-38.61-25.18H104.757c-16.787,0-31.895,10.072-38.61,25.18v0.839l-29.377,102.4     c-1.679,3.357-5.036,5.875-8.393,5.875H24.18C9.911,292.771-1,303.682-1,317.951v92.328c0,14.269,10.911,25.18,25.18,25.18     v41.967c0,14.269,10.911,25.18,25.18,25.18h16.787c14.269,0,25.18-10.911,25.18-25.18v-41.967h184.656v41.967     c0,14.269,10.911,25.18,25.18,25.18h16.787c14.269,0,25.18-10.911,25.18-25.18v-41.967     C357.4,435.459,368.311,424.548,368.311,410.279z M74.541,477.426c0,5.036-3.357,8.393-8.393,8.393H49.361     c-5.036,0-8.393-3.357-8.393-8.393v-41.967h33.574V477.426z M326.344,477.426c0,5.036-3.357,8.393-8.393,8.393h-16.787     c-5.036,0-8.393-3.357-8.393-8.393v-41.967h33.574V477.426z M351.525,410.279c0,5.036-3.357,8.393-8.393,8.393h-8.393h-50.361     H82.934H32.574H24.18c-5.036,0-8.393-3.357-8.393-8.393v-92.328c0-5.036,3.357-8.393,8.393-8.393h4.197     c10.911,0,20.984-7.554,24.341-18.466l29.377-101.561c4.197-8.393,12.59-14.269,22.662-14.269h157.797     c9.233,0,18.466,5.036,22.662,14.269l29.377,101.561c3.357,10.911,13.43,18.466,24.341,18.466h4.197     c5.036,0,8.393,3.357,8.393,8.393V410.279z"
                                                        data-v-40bd49ea=""></path>
                                                    <path
                                                        d="M74.541,326.344c-18.466,0-33.574,15.108-33.574,33.574s15.108,33.574,33.574,33.574s33.574-15.108,33.574-33.574     S93.007,326.344,74.541,326.344z M74.541,376.705c-9.233,0-16.787-7.554-16.787-16.787s7.554-16.787,16.787-16.787     s16.787,7.554,16.787,16.787S83.774,376.705,74.541,376.705z"
                                                        data-v-40bd49ea=""></path>
                                                    <path
                                                        d="M292.771,326.344c-18.466,0-33.574,15.108-33.574,33.574s15.108,33.574,33.574,33.574s33.574-15.108,33.574-33.574     S311.236,326.344,292.771,326.344z M292.771,376.705c-9.233,0-16.787-7.554-16.787-16.787s7.554-16.787,16.787-16.787     c9.233,0,16.787,7.554,16.787,16.787S302.003,376.705,292.771,376.705z"
                                                        data-v-40bd49ea=""></path>
                                                    <path
                                                        d="M200.443,368.311h-33.574c-5.036,0-8.393,3.357-8.393,8.393c0,5.036,3.357,8.393,8.393,8.393h33.574     c5.036,0,8.393-3.357,8.393-8.393C208.836,371.669,205.479,368.311,200.443,368.311z"
                                                        data-v-40bd49ea=""></path>
                                                    <path
                                                        d="M217.229,334.738h-67.148c-5.036,0-8.393,3.357-8.393,8.393c0,5.036,3.357,8.393,8.393,8.393h67.148     c5.036,0,8.393-3.357,8.393-8.393C225.623,338.095,222.266,334.738,217.229,334.738z"
                                                        data-v-40bd49ea=""></path>
                                                    <path
                                                        d="M103.079,292.771h161.993c5.036,0,10.072-2.518,13.43-6.715s4.197-10.072,2.518-15.108L260.875,203.8     c-1.679-6.715-8.394-11.751-15.948-11.751H123.223c-7.554,0-13.43,4.197-15.948,11.751l-20.144,67.148     c-1.679,5.036-0.839,10.911,2.518,15.108C93.007,290.252,98.043,292.771,103.079,292.771z M123.223,208.836h121.705     l20.144,67.148H103.079L123.223,208.836z"
                                                        data-v-40bd49ea=""></path>
                                                    <path
                                                        d="M494.213-1H351.525c-5.036,0-8.393,3.357-8.393,8.393v142.689c0,5.036,3.357,8.393,8.393,8.393h58.754v260.197h-16.787     c-5.036,0-8.393,3.357-8.393,8.393v25.18h-16.787c-5.036,0-8.393,3.357-8.393,8.393v33.574c0,5.036,3.357,8.393,8.393,8.393     h100.721c5.036,0,8.393-3.357,8.393-8.393v-33.574c0-5.036-3.357-8.393-8.393-8.393h-16.787v-25.18     c0-5.036-3.357-8.393-8.393-8.393h-16.787V158.475h67.148c5.036,0,8.393-3.357,8.393-8.393V7.393     C502.607,2.357,499.249-1,494.213-1z M460.639,485.82h-83.934v-16.787h16.787h50.361h16.787V485.82z M435.459,452.246h-33.574     v-16.787h33.574V452.246z M485.82,141.689H359.918V15.787H485.82V141.689z"
                                                        data-v-40bd49ea=""></path>
                                                    <path
                                                        d="M410.279,124.902c5.036,0,8.393-3.357,8.393-8.393V99.721h8.393c18.466,0,33.574-15.108,33.574-33.574     c0-18.466-15.108-33.574-33.574-33.574h-16.787c-5.036,0-8.393,3.357-8.393,8.393v50.361v25.18     C401.885,121.544,405.243,124.902,410.279,124.902z M443.852,66.148c0,9.233-7.554,16.787-16.787,16.787h-8.393V49.361h8.393     C436.298,49.361,443.852,56.915,443.852,66.148z"
                                                        data-v-40bd49ea=""></path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                    5
                                </div>
                                <div class="option-item pool">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        version="1.1" id="Capa_1" x="0px" y="0px" width="32" height="32"
                                        viewBox="0 0 367.928 367.928" xml:space="preserve"
                                        style="enable-background: new 0 0 367.928 367.928" data-v-40bd49ea="">
                                        <g data-v-40bd49ea="">
                                            <g data-v-40bd49ea="">
                                                <path
                                                    d="M367.928,108.589c0-3.866-3.134-7-7-7h-52.529V61.497c0.047-0.718,0.496-6.084,3.566-11.1    c4.119-6.727,11.002-9.859,21.036-9.583c5.459,0.152,12.648,1.244,15.893,5.583c3.208,4.292,1.634,10.425,1.635,10.424    c-1.063,3.717,1.09,7.592,4.807,8.654c3.716,1.061,7.592-1.09,8.654-4.807c0.365-1.278,3.363-12.767-3.751-22.477    c-5.273-7.198-14.307-11.024-26.849-11.372c-19.4-0.548-29.061,8.89-33.74,16.895c-4.841,8.284-5.221,16.487-5.248,17.396    c-0.002,0.07-0.003,0.141-0.003,0.211v40.268h-95.157V61.498c0.047-0.719,0.497-6.084,3.568-11.1    c4.121-6.728,11.003-9.859,21.039-9.583c5.459,0.152,12.648,1.243,15.893,5.583c3.208,4.292,1.634,10.425,1.635,10.424    c-1.063,3.717,1.09,7.592,4.807,8.654c3.718,1.061,7.592-1.09,8.654-4.807c0.365-1.278,3.363-12.767-3.751-22.477    c-5.274-7.198-14.307-11.024-26.849-11.373c-19.418-0.538-29.063,8.89-33.742,16.895c-4.843,8.283-5.224,16.487-5.251,17.395    c-0.002,0.071-0.003,0.141-0.003,0.212v40.268H7c-3.866,0-7,3.134-7,7v119.964c0.219,3.669,3.276,6.578,7,6.578    c10.206,0,14.941,3.747,20.937,8.49c6.82,5.395,14.55,11.51,29.624,11.51s22.803-6.115,29.622-11.511    c5.995-4.743,10.73-8.489,20.935-8.489s14.94,3.747,20.936,8.49c6.819,5.395,14.549,11.51,29.622,11.51    c15.075,0,22.805-6.115,29.624-11.511c5.995-4.743,10.732-8.489,20.937-8.489c10.206,0,14.941,3.747,20.937,8.49    c6.82,5.395,14.549,11.51,29.623,11.51c15.075,0,22.806-6.115,29.626-11.51c5.996-4.744,10.732-8.49,20.94-8.49    c10.207,0,14.943,3.747,20.941,8.49c6.819,5.395,14.554,11.154,29.625,11.51c4.036,0.095,7-3.134,7-7    c0-0.044-0.006-0.085-0.007-0.129c0.002,0,0.005-0.001,0.007-0.002V108.589z M185.241,125.589v102.815    c-2.012,1.381-3.852,2.833-5.627,4.236c-5.996,4.744-10.732,8.49-20.938,8.49c-10.205,0-14.94-3.747-20.936-8.489    c-6.819-5.395-14.548-11.511-29.622-11.511c-15.073,0-22.803,6.115-29.622,11.51c-5.995,4.743-10.73,8.49-20.936,8.49    c-10.206,0-14.941-3.747-20.938-8.49C33,229.774,29.106,226.714,24,224.47c-0.681-0.299-1.386-0.581-2.111-0.849    c-0.071-0.026-0.142-0.053-0.213-0.079c-0.74-0.268-1.501-0.52-2.294-0.75c-0.037-0.011-0.076-0.02-0.113-0.03    c-0.704-0.202-1.434-0.384-2.182-0.552c-0.194-0.044-0.39-0.087-0.587-0.128c-0.81-0.17-1.636-0.326-2.5-0.452V115.589h171.241    V125.589z M294.399,224.015c-5.629,2.276-9.794,5.565-13.662,8.625c-5.997,4.744-10.733,8.49-20.94,8.49    c-10.206,0-14.941-3.747-20.937-8.49c-6.819-5.395-14.549-11.51-29.623-11.51c-3.755,0-7.053,0.38-9.995,1.033v-17.306h95.157    V224.015z M294.399,190.858h-95.157v-30.574h95.157V190.858z M294.399,125.589v20.695h-95.157v-20.695v-10h95.157V125.589z     M339.988,232.641c-6.82-5.395-14.551-11.51-29.626-11.51c-0.675,0-1.318,0.026-1.964,0.05v-95.592v-10h45.529v10v114.816    C348.163,239.097,344.416,236.144,339.988,232.641z"
                                                    data-v-40bd49ea=""></path>
                                                <path
                                                    d="M360.928,284.13c-10.207,0-14.943-3.747-20.94-8.49c-6.82-5.395-14.551-11.51-29.626-11.51    c-15.076,0-22.806,6.115-29.626,11.51c-5.997,4.744-10.733,8.49-20.94,8.49c-10.206,0-14.941-3.747-20.937-8.49    c-6.819-5.395-14.549-11.51-29.623-11.51c-15.074,0-22.803,6.115-29.622,11.51c-5.996,4.744-10.732,8.49-20.938,8.49    c-10.205,0-14.94-3.747-20.936-8.489c-6.819-5.396-14.548-11.511-29.622-11.511c-15.073,0-22.803,6.115-29.622,11.51    c-5.995,4.743-10.73,8.49-20.936,8.49c-10.206,0-14.941-3.747-20.938-8.49C29.804,270.246,22.074,264.13,7,264.13    c-3.866,0-7,3.134-7,7s3.134,7,7,7c10.206,0,14.941,3.747,20.937,8.49c6.82,5.395,14.55,11.51,29.624,11.51    s22.803-6.115,29.622-11.511c5.995-4.743,10.73-8.489,20.935-8.489s14.94,3.747,20.936,8.49    c6.819,5.395,14.549,11.51,29.622,11.51c15.075,0,22.805-6.115,29.624-11.511c5.995-4.743,10.732-8.489,20.937-8.489    c10.206,0,14.941,3.747,20.937,8.49c6.82,5.395,14.549,11.51,29.623,11.51c15.075,0,22.806-6.115,29.626-11.51    c5.996-4.744,10.732-8.49,20.94-8.49c10.207,0,14.943,3.747,20.941,8.49c6.819,5.395,14.55,11.51,29.625,11.51    c3.866,0,7-3.134,7-7S364.794,284.13,360.928,284.13z"
                                                    data-v-40bd49ea=""></path>
                                                <path
                                                    d="M360.928,327.13c-10.207,0-14.943-3.747-20.94-8.49c-6.82-5.395-14.551-11.51-29.626-11.51    c-15.076,0-22.806,6.115-29.626,11.51c-5.997,4.744-10.733,8.49-20.94,8.49c-10.206,0-14.941-3.747-20.937-8.49    c-6.819-5.395-14.549-11.51-29.623-11.51c-15.074,0-22.803,6.115-29.622,11.51c-5.996,4.744-10.732,8.49-20.938,8.49    c-10.205,0-14.94-3.747-20.936-8.489c-6.819-5.396-14.548-11.511-29.622-11.511c-15.073,0-22.803,6.115-29.622,11.51    c-5.995,4.743-10.73,8.49-20.936,8.49c-10.206,0-14.941-3.747-20.938-8.49C29.804,313.246,22.074,307.13,7,307.13    c-3.866,0-7,3.134-7,7s3.134,7,7,7c10.206,0,14.941,3.747,20.937,8.49c6.82,5.395,14.55,11.51,29.624,11.51    s22.803-6.115,29.622-11.511c5.995-4.743,10.73-8.489,20.935-8.489s14.94,3.747,20.936,8.49    c6.819,5.395,14.549,11.51,29.622,11.51c15.075,0,22.805-6.115,29.624-11.511c5.995-4.743,10.732-8.489,20.937-8.489    c10.206,0,14.941,3.747,20.937,8.49c6.82,5.395,14.549,11.51,29.623,11.51c15.075,0,22.806-6.115,29.626-11.51    c5.996-4.744,10.732-8.49,20.94-8.49c10.207,0,14.943,3.747,20.941,8.49c6.819,5.395,14.55,11.51,29.625,11.51    c3.866,0,7-3.134,7-7S364.794,327.13,360.928,327.13z"
                                                    data-v-40bd49ea=""></path>
                                            </g>
                                        </g>
                                    </svg>
                                    2
                                </div>
                                <div class="option-item gym">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        version="1.1" id="Layer_1" x="0px" y="0px" width="32" height="32"
                                        viewBox="0 0 512.001 512.001" xml:space="preserve"
                                        style="enable-background: new 0 0 512.001 512.001" data-v-40bd49ea="">
                                        <g data-v-40bd49ea="">
                                            <g data-v-40bd49ea="">
                                                <path
                                                    d="M503.351,214.272h-14.765v-12.181c0-25.301-18.441-46.365-42.587-50.49v-1.262c0-28.25-22.985-51.235-51.236-51.235    s-51.236,22.985-51.236,51.235v63.933H168.471V150.34c0-28.25-22.985-51.235-51.236-51.235S65.999,122.09,65.999,150.34v1.262    c-24.146,4.125-42.587,25.188-42.587,50.49v12.181H8.649c-4.777,0-8.649,3.872-8.649,8.649v66.158    c0,4.778,3.872,8.649,8.649,8.649h14.765v12.181c0,25.301,18.441,46.365,42.587,50.49v1.262c0,28.25,22.985,51.235,51.236,51.235    s51.236-22.985,51.236-51.235v-63.933h175.057v63.933c0,28.25,22.985,51.235,51.236,51.235c28.251,0,51.236-22.985,51.236-51.235    V360.4c24.146-4.125,42.587-25.188,42.587-50.49v-12.181h14.765c4.778,0,8.649-3.872,8.649-8.649v-66.158    C512,218.144,508.128,214.272,503.351,214.272z M23.414,280.431h-6.115v-48.86h6.115V280.431z M65.999,342.726    c-14.536-3.834-25.289-17.092-25.289-32.816V202.09c0-15.724,10.751-28.981,25.289-32.816V342.726z M151.173,361.662    c0,18.713-15.225,33.937-33.938,33.937c-18.713,0-33.938-15.224-33.938-33.937V150.339c0-18.713,15.225-33.937,33.938-33.937    c18.713,0,33.938,15.224,33.938,33.937V361.662z M183.925,280.431h-15.454v-48.86h15.454V280.431z M310.777,280.431H201.222    v-48.86h109.555V280.431z M343.529,280.431h-15.453v-48.86h15.453V280.431z M428.701,361.662    c0,18.713-15.225,33.937-33.938,33.937s-33.938-15.224-33.938-33.937V150.339c0-18.713,15.225-33.937,33.938-33.937    s33.938,15.224,33.938,33.937V361.662z M471.288,309.91L471.288,309.91c0,15.724-10.751,28.981-25.289,32.816V169.274    c14.536,3.834,25.289,17.092,25.289,32.816V309.91z M494.702,280.431h-6.115v-48.86h6.115V280.431z"
                                                    data-v-40bd49ea=""></path>
                                            </g>
                                        </g>
                                    </svg>
                                    1
                                </div>
                                <div class="details">
                                    <viewdetails />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="realisation-container">
                        <div class="image">
                            <a href="#">
                                <img src="../assets/images/Centre Commercial Darou Salam.webp" alt="">
                            </a>
                        </div>
                        <div class="card">
                            <div class="text">
                                <a href="#">
                                    <h2>Les Résidences BALENA</h2>
                                </a>
                            </div>
                            <div class="option">
                                <div class="option-item bed">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        data-v-40bd49ea="">
                                        <rect width="32" height="32" fill="url(#pattern0)" data-v-40bd49ea=""></rect>
                                        <defs data-v-40bd49ea="">
                                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1"
                                                height="1" data-v-40bd49ea="">
                                                <use xlink:href="#image0_318_2564" transform="scale(0.00195312)"
                                                    data-v-40bd49ea=""></use>
                                            </pattern>
                                            <image id="image0_318_2564" width="512" height="512"
                                                xlink:href="data:image/png;base64,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"
                                                data-v-40bd49ea=""></image>
                                        </defs>
                                    </svg>
                                    25

                                </div>
                                <div class="option-item parking">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        version="1.1" id="Layer_1" x="0px" y="0px" width="32" height="32"
                                        viewBox="0 0 503.607 503.607" xml:space="preserve"
                                        style="enable-background: new 0 0 503.607 503.607" data-v-40bd49ea="">
                                        <g transform="translate(1 1)" data-v-40bd49ea="">
                                            <g data-v-40bd49ea="">
                                                <g data-v-40bd49ea="">
                                                    <path
                                                        d="M368.311,410.279v-92.328c0-14.269-10.911-25.18-25.18-25.18h-4.197c-4.197,0-7.554-2.518-8.393-5.875l-29.377-102.4     v-0.839c-6.715-15.108-21.823-25.18-38.61-25.18H104.757c-16.787,0-31.895,10.072-38.61,25.18v0.839l-29.377,102.4     c-1.679,3.357-5.036,5.875-8.393,5.875H24.18C9.911,292.771-1,303.682-1,317.951v92.328c0,14.269,10.911,25.18,25.18,25.18     v41.967c0,14.269,10.911,25.18,25.18,25.18h16.787c14.269,0,25.18-10.911,25.18-25.18v-41.967h184.656v41.967     c0,14.269,10.911,25.18,25.18,25.18h16.787c14.269,0,25.18-10.911,25.18-25.18v-41.967     C357.4,435.459,368.311,424.548,368.311,410.279z M74.541,477.426c0,5.036-3.357,8.393-8.393,8.393H49.361     c-5.036,0-8.393-3.357-8.393-8.393v-41.967h33.574V477.426z M326.344,477.426c0,5.036-3.357,8.393-8.393,8.393h-16.787     c-5.036,0-8.393-3.357-8.393-8.393v-41.967h33.574V477.426z M351.525,410.279c0,5.036-3.357,8.393-8.393,8.393h-8.393h-50.361     H82.934H32.574H24.18c-5.036,0-8.393-3.357-8.393-8.393v-92.328c0-5.036,3.357-8.393,8.393-8.393h4.197     c10.911,0,20.984-7.554,24.341-18.466l29.377-101.561c4.197-8.393,12.59-14.269,22.662-14.269h157.797     c9.233,0,18.466,5.036,22.662,14.269l29.377,101.561c3.357,10.911,13.43,18.466,24.341,18.466h4.197     c5.036,0,8.393,3.357,8.393,8.393V410.279z"
                                                        data-v-40bd49ea=""></path>
                                                    <path
                                                        d="M74.541,326.344c-18.466,0-33.574,15.108-33.574,33.574s15.108,33.574,33.574,33.574s33.574-15.108,33.574-33.574     S93.007,326.344,74.541,326.344z M74.541,376.705c-9.233,0-16.787-7.554-16.787-16.787s7.554-16.787,16.787-16.787     s16.787,7.554,16.787,16.787S83.774,376.705,74.541,376.705z"
                                                        data-v-40bd49ea=""></path>
                                                    <path
                                                        d="M292.771,326.344c-18.466,0-33.574,15.108-33.574,33.574s15.108,33.574,33.574,33.574s33.574-15.108,33.574-33.574     S311.236,326.344,292.771,326.344z M292.771,376.705c-9.233,0-16.787-7.554-16.787-16.787s7.554-16.787,16.787-16.787     c9.233,0,16.787,7.554,16.787,16.787S302.003,376.705,292.771,376.705z"
                                                        data-v-40bd49ea=""></path>
                                                    <path
                                                        d="M200.443,368.311h-33.574c-5.036,0-8.393,3.357-8.393,8.393c0,5.036,3.357,8.393,8.393,8.393h33.574     c5.036,0,8.393-3.357,8.393-8.393C208.836,371.669,205.479,368.311,200.443,368.311z"
                                                        data-v-40bd49ea=""></path>
                                                    <path
                                                        d="M217.229,334.738h-67.148c-5.036,0-8.393,3.357-8.393,8.393c0,5.036,3.357,8.393,8.393,8.393h67.148     c5.036,0,8.393-3.357,8.393-8.393C225.623,338.095,222.266,334.738,217.229,334.738z"
                                                        data-v-40bd49ea=""></path>
                                                    <path
                                                        d="M103.079,292.771h161.993c5.036,0,10.072-2.518,13.43-6.715s4.197-10.072,2.518-15.108L260.875,203.8     c-1.679-6.715-8.394-11.751-15.948-11.751H123.223c-7.554,0-13.43,4.197-15.948,11.751l-20.144,67.148     c-1.679,5.036-0.839,10.911,2.518,15.108C93.007,290.252,98.043,292.771,103.079,292.771z M123.223,208.836h121.705     l20.144,67.148H103.079L123.223,208.836z"
                                                        data-v-40bd49ea=""></path>
                                                    <path
                                                        d="M494.213-1H351.525c-5.036,0-8.393,3.357-8.393,8.393v142.689c0,5.036,3.357,8.393,8.393,8.393h58.754v260.197h-16.787     c-5.036,0-8.393,3.357-8.393,8.393v25.18h-16.787c-5.036,0-8.393,3.357-8.393,8.393v33.574c0,5.036,3.357,8.393,8.393,8.393     h100.721c5.036,0,8.393-3.357,8.393-8.393v-33.574c0-5.036-3.357-8.393-8.393-8.393h-16.787v-25.18     c0-5.036-3.357-8.393-8.393-8.393h-16.787V158.475h67.148c5.036,0,8.393-3.357,8.393-8.393V7.393     C502.607,2.357,499.249-1,494.213-1z M460.639,485.82h-83.934v-16.787h16.787h50.361h16.787V485.82z M435.459,452.246h-33.574     v-16.787h33.574V452.246z M485.82,141.689H359.918V15.787H485.82V141.689z"
                                                        data-v-40bd49ea=""></path>
                                                    <path
                                                        d="M410.279,124.902c5.036,0,8.393-3.357,8.393-8.393V99.721h8.393c18.466,0,33.574-15.108,33.574-33.574     c0-18.466-15.108-33.574-33.574-33.574h-16.787c-5.036,0-8.393,3.357-8.393,8.393v50.361v25.18     C401.885,121.544,405.243,124.902,410.279,124.902z M443.852,66.148c0,9.233-7.554,16.787-16.787,16.787h-8.393V49.361h8.393     C436.298,49.361,443.852,56.915,443.852,66.148z"
                                                        data-v-40bd49ea=""></path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                    6
                                </div>
                                <div class="option-item pool">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        version="1.1" id="Capa_1" x="0px" y="0px" width="32" height="32"
                                        viewBox="0 0 367.928 367.928" xml:space="preserve"
                                        style="enable-background: new 0 0 367.928 367.928" data-v-40bd49ea="">
                                        <g data-v-40bd49ea="">
                                            <g data-v-40bd49ea="">
                                                <path
                                                    d="M367.928,108.589c0-3.866-3.134-7-7-7h-52.529V61.497c0.047-0.718,0.496-6.084,3.566-11.1    c4.119-6.727,11.002-9.859,21.036-9.583c5.459,0.152,12.648,1.244,15.893,5.583c3.208,4.292,1.634,10.425,1.635,10.424    c-1.063,3.717,1.09,7.592,4.807,8.654c3.716,1.061,7.592-1.09,8.654-4.807c0.365-1.278,3.363-12.767-3.751-22.477    c-5.273-7.198-14.307-11.024-26.849-11.372c-19.4-0.548-29.061,8.89-33.74,16.895c-4.841,8.284-5.221,16.487-5.248,17.396    c-0.002,0.07-0.003,0.141-0.003,0.211v40.268h-95.157V61.498c0.047-0.719,0.497-6.084,3.568-11.1    c4.121-6.728,11.003-9.859,21.039-9.583c5.459,0.152,12.648,1.243,15.893,5.583c3.208,4.292,1.634,10.425,1.635,10.424    c-1.063,3.717,1.09,7.592,4.807,8.654c3.718,1.061,7.592-1.09,8.654-4.807c0.365-1.278,3.363-12.767-3.751-22.477    c-5.274-7.198-14.307-11.024-26.849-11.373c-19.418-0.538-29.063,8.89-33.742,16.895c-4.843,8.283-5.224,16.487-5.251,17.395    c-0.002,0.071-0.003,0.141-0.003,0.212v40.268H7c-3.866,0-7,3.134-7,7v119.964c0.219,3.669,3.276,6.578,7,6.578    c10.206,0,14.941,3.747,20.937,8.49c6.82,5.395,14.55,11.51,29.624,11.51s22.803-6.115,29.622-11.511    c5.995-4.743,10.73-8.489,20.935-8.489s14.94,3.747,20.936,8.49c6.819,5.395,14.549,11.51,29.622,11.51    c15.075,0,22.805-6.115,29.624-11.511c5.995-4.743,10.732-8.489,20.937-8.489c10.206,0,14.941,3.747,20.937,8.49    c6.82,5.395,14.549,11.51,29.623,11.51c15.075,0,22.806-6.115,29.626-11.51c5.996-4.744,10.732-8.49,20.94-8.49    c10.207,0,14.943,3.747,20.941,8.49c6.819,5.395,14.554,11.154,29.625,11.51c4.036,0.095,7-3.134,7-7    c0-0.044-0.006-0.085-0.007-0.129c0.002,0,0.005-0.001,0.007-0.002V108.589z M185.241,125.589v102.815    c-2.012,1.381-3.852,2.833-5.627,4.236c-5.996,4.744-10.732,8.49-20.938,8.49c-10.205,0-14.94-3.747-20.936-8.489    c-6.819-5.395-14.548-11.511-29.622-11.511c-15.073,0-22.803,6.115-29.622,11.51c-5.995,4.743-10.73,8.49-20.936,8.49    c-10.206,0-14.941-3.747-20.938-8.49C33,229.774,29.106,226.714,24,224.47c-0.681-0.299-1.386-0.581-2.111-0.849    c-0.071-0.026-0.142-0.053-0.213-0.079c-0.74-0.268-1.501-0.52-2.294-0.75c-0.037-0.011-0.076-0.02-0.113-0.03    c-0.704-0.202-1.434-0.384-2.182-0.552c-0.194-0.044-0.39-0.087-0.587-0.128c-0.81-0.17-1.636-0.326-2.5-0.452V115.589h171.241    V125.589z M294.399,224.015c-5.629,2.276-9.794,5.565-13.662,8.625c-5.997,4.744-10.733,8.49-20.94,8.49    c-10.206,0-14.941-3.747-20.937-8.49c-6.819-5.395-14.549-11.51-29.623-11.51c-3.755,0-7.053,0.38-9.995,1.033v-17.306h95.157    V224.015z M294.399,190.858h-95.157v-30.574h95.157V190.858z M294.399,125.589v20.695h-95.157v-20.695v-10h95.157V125.589z     M339.988,232.641c-6.82-5.395-14.551-11.51-29.626-11.51c-0.675,0-1.318,0.026-1.964,0.05v-95.592v-10h45.529v10v114.816    C348.163,239.097,344.416,236.144,339.988,232.641z"
                                                    data-v-40bd49ea=""></path>
                                                <path
                                                    d="M360.928,284.13c-10.207,0-14.943-3.747-20.94-8.49c-6.82-5.395-14.551-11.51-29.626-11.51    c-15.076,0-22.806,6.115-29.626,11.51c-5.997,4.744-10.733,8.49-20.94,8.49c-10.206,0-14.941-3.747-20.937-8.49    c-6.819-5.395-14.549-11.51-29.623-11.51c-15.074,0-22.803,6.115-29.622,11.51c-5.996,4.744-10.732,8.49-20.938,8.49    c-10.205,0-14.94-3.747-20.936-8.489c-6.819-5.396-14.548-11.511-29.622-11.511c-15.073,0-22.803,6.115-29.622,11.51    c-5.995,4.743-10.73,8.49-20.936,8.49c-10.206,0-14.941-3.747-20.938-8.49C29.804,270.246,22.074,264.13,7,264.13    c-3.866,0-7,3.134-7,7s3.134,7,7,7c10.206,0,14.941,3.747,20.937,8.49c6.82,5.395,14.55,11.51,29.624,11.51    s22.803-6.115,29.622-11.511c5.995-4.743,10.73-8.489,20.935-8.489s14.94,3.747,20.936,8.49    c6.819,5.395,14.549,11.51,29.622,11.51c15.075,0,22.805-6.115,29.624-11.511c5.995-4.743,10.732-8.489,20.937-8.489    c10.206,0,14.941,3.747,20.937,8.49c6.82,5.395,14.549,11.51,29.623,11.51c15.075,0,22.806-6.115,29.626-11.51    c5.996-4.744,10.732-8.49,20.94-8.49c10.207,0,14.943,3.747,20.941,8.49c6.819,5.395,14.55,11.51,29.625,11.51    c3.866,0,7-3.134,7-7S364.794,284.13,360.928,284.13z"
                                                    data-v-40bd49ea=""></path>
                                                <path
                                                    d="M360.928,327.13c-10.207,0-14.943-3.747-20.94-8.49c-6.82-5.395-14.551-11.51-29.626-11.51    c-15.076,0-22.806,6.115-29.626,11.51c-5.997,4.744-10.733,8.49-20.94,8.49c-10.206,0-14.941-3.747-20.937-8.49    c-6.819-5.395-14.549-11.51-29.623-11.51c-15.074,0-22.803,6.115-29.622,11.51c-5.996,4.744-10.732,8.49-20.938,8.49    c-10.205,0-14.94-3.747-20.936-8.489c-6.819-5.396-14.548-11.511-29.622-11.511c-15.073,0-22.803,6.115-29.622,11.51    c-5.995,4.743-10.73,8.49-20.936,8.49c-10.206,0-14.941-3.747-20.938-8.49C29.804,313.246,22.074,307.13,7,307.13    c-3.866,0-7,3.134-7,7s3.134,7,7,7c10.206,0,14.941,3.747,20.937,8.49c6.82,5.395,14.55,11.51,29.624,11.51    s22.803-6.115,29.622-11.511c5.995-4.743,10.73-8.489,20.935-8.489s14.94,3.747,20.936,8.49    c6.819,5.395,14.549,11.51,29.622,11.51c15.075,0,22.805-6.115,29.624-11.511c5.995-4.743,10.732-8.489,20.937-8.489    c10.206,0,14.941,3.747,20.937,8.49c6.82,5.395,14.549,11.51,29.623,11.51c15.075,0,22.806-6.115,29.626-11.51    c5.996-4.744,10.732-8.49,20.94-8.49c10.207,0,14.943,3.747,20.941,8.49c6.819,5.395,14.55,11.51,29.625,11.51    c3.866,0,7-3.134,7-7S364.794,327.13,360.928,327.13z"
                                                    data-v-40bd49ea=""></path>
                                            </g>
                                        </g>
                                    </svg>
                                    0
                                </div>
                                <div class="option-item gym">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        version="1.1" id="Layer_1" x="0px" y="0px" width="32" height="32"
                                        viewBox="0 0 512.001 512.001" xml:space="preserve"
                                        style="enable-background: new 0 0 512.001 512.001" data-v-40bd49ea="">
                                        <g data-v-40bd49ea="">
                                            <g data-v-40bd49ea="">
                                                <path
                                                    d="M503.351,214.272h-14.765v-12.181c0-25.301-18.441-46.365-42.587-50.49v-1.262c0-28.25-22.985-51.235-51.236-51.235    s-51.236,22.985-51.236,51.235v63.933H168.471V150.34c0-28.25-22.985-51.235-51.236-51.235S65.999,122.09,65.999,150.34v1.262    c-24.146,4.125-42.587,25.188-42.587,50.49v12.181H8.649c-4.777,0-8.649,3.872-8.649,8.649v66.158    c0,4.778,3.872,8.649,8.649,8.649h14.765v12.181c0,25.301,18.441,46.365,42.587,50.49v1.262c0,28.25,22.985,51.235,51.236,51.235    s51.236-22.985,51.236-51.235v-63.933h175.057v63.933c0,28.25,22.985,51.235,51.236,51.235c28.251,0,51.236-22.985,51.236-51.235    V360.4c24.146-4.125,42.587-25.188,42.587-50.49v-12.181h14.765c4.778,0,8.649-3.872,8.649-8.649v-66.158    C512,218.144,508.128,214.272,503.351,214.272z M23.414,280.431h-6.115v-48.86h6.115V280.431z M65.999,342.726    c-14.536-3.834-25.289-17.092-25.289-32.816V202.09c0-15.724,10.751-28.981,25.289-32.816V342.726z M151.173,361.662    c0,18.713-15.225,33.937-33.938,33.937c-18.713,0-33.938-15.224-33.938-33.937V150.339c0-18.713,15.225-33.937,33.938-33.937    c18.713,0,33.938,15.224,33.938,33.937V361.662z M183.925,280.431h-15.454v-48.86h15.454V280.431z M310.777,280.431H201.222    v-48.86h109.555V280.431z M343.529,280.431h-15.453v-48.86h15.453V280.431z M428.701,361.662    c0,18.713-15.225,33.937-33.938,33.937s-33.938-15.224-33.938-33.937V150.339c0-18.713,15.225-33.937,33.938-33.937    s33.938,15.224,33.938,33.937V361.662z M471.288,309.91L471.288,309.91c0,15.724-10.751,28.981-25.289,32.816V169.274    c14.536,3.834,25.289,17.092,25.289,32.816V309.91z M494.702,280.431h-6.115v-48.86h6.115V280.431z"
                                                    data-v-40bd49ea=""></path>
                                            </g>
                                        </g>
                                    </svg>
                                    4
                                </div>
                                <div class="details">
                                    <viewdetails />
                                </div>
                            </div>

                        </div>

                    </div>
                    <div class="realisation-container">
                        <div class="image">
                            <a href="#">
                                <img src="../assets/images/Les Résidences BALENA.webp" alt="">
                            </a>
                        </div>
                        <div class="card">
                            <div class="text">
                                <a href="#">
                                    <h2>Centre Commercial Darou Salam</h2>
                                </a>
                            </div>
                            <div class="option">
                                <div class="option-item bed">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        data-v-40bd49ea="">
                                        <rect width="32" height="32" fill="url(#pattern0)" data-v-40bd49ea=""></rect>
                                        <defs data-v-40bd49ea="">
                                            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1"
                                                height="1" data-v-40bd49ea="">
                                                <use xlink:href="#image0_318_2564" transform="scale(0.00195312)"
                                                    data-v-40bd49ea=""></use>
                                            </pattern>
                                            <image id="image0_318_2564" width="512" height="512"
                                                xlink:href="data:image/png;base64,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"
                                                data-v-40bd49ea=""></image>
                                        </defs>
                                    </svg>
                                    10
                                </div>
                                <div class="option-item parking">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        version="1.1" id="Layer_1" x="0px" y="0px" width="32" height="32"
                                        viewBox="0 0 503.607 503.607" xml:space="preserve"
                                        style="enable-background: new 0 0 503.607 503.607" data-v-40bd49ea="">
                                        <g transform="translate(1 1)" data-v-40bd49ea="">
                                            <g data-v-40bd49ea="">
                                                <g data-v-40bd49ea="">
                                                    <path
                                                        d="M368.311,410.279v-92.328c0-14.269-10.911-25.18-25.18-25.18h-4.197c-4.197,0-7.554-2.518-8.393-5.875l-29.377-102.4     v-0.839c-6.715-15.108-21.823-25.18-38.61-25.18H104.757c-16.787,0-31.895,10.072-38.61,25.18v0.839l-29.377,102.4     c-1.679,3.357-5.036,5.875-8.393,5.875H24.18C9.911,292.771-1,303.682-1,317.951v92.328c0,14.269,10.911,25.18,25.18,25.18     v41.967c0,14.269,10.911,25.18,25.18,25.18h16.787c14.269,0,25.18-10.911,25.18-25.18v-41.967h184.656v41.967     c0,14.269,10.911,25.18,25.18,25.18h16.787c14.269,0,25.18-10.911,25.18-25.18v-41.967     C357.4,435.459,368.311,424.548,368.311,410.279z M74.541,477.426c0,5.036-3.357,8.393-8.393,8.393H49.361     c-5.036,0-8.393-3.357-8.393-8.393v-41.967h33.574V477.426z M326.344,477.426c0,5.036-3.357,8.393-8.393,8.393h-16.787     c-5.036,0-8.393-3.357-8.393-8.393v-41.967h33.574V477.426z M351.525,410.279c0,5.036-3.357,8.393-8.393,8.393h-8.393h-50.361     H82.934H32.574H24.18c-5.036,0-8.393-3.357-8.393-8.393v-92.328c0-5.036,3.357-8.393,8.393-8.393h4.197     c10.911,0,20.984-7.554,24.341-18.466l29.377-101.561c4.197-8.393,12.59-14.269,22.662-14.269h157.797     c9.233,0,18.466,5.036,22.662,14.269l29.377,101.561c3.357,10.911,13.43,18.466,24.341,18.466h4.197     c5.036,0,8.393,3.357,8.393,8.393V410.279z"
                                                        data-v-40bd49ea=""></path>
                                                    <path
                                                        d="M74.541,326.344c-18.466,0-33.574,15.108-33.574,33.574s15.108,33.574,33.574,33.574s33.574-15.108,33.574-33.574     S93.007,326.344,74.541,326.344z M74.541,376.705c-9.233,0-16.787-7.554-16.787-16.787s7.554-16.787,16.787-16.787     s16.787,7.554,16.787,16.787S83.774,376.705,74.541,376.705z"
                                                        data-v-40bd49ea=""></path>
                                                    <path
                                                        d="M292.771,326.344c-18.466,0-33.574,15.108-33.574,33.574s15.108,33.574,33.574,33.574s33.574-15.108,33.574-33.574     S311.236,326.344,292.771,326.344z M292.771,376.705c-9.233,0-16.787-7.554-16.787-16.787s7.554-16.787,16.787-16.787     c9.233,0,16.787,7.554,16.787,16.787S302.003,376.705,292.771,376.705z"
                                                        data-v-40bd49ea=""></path>
                                                    <path
                                                        d="M200.443,368.311h-33.574c-5.036,0-8.393,3.357-8.393,8.393c0,5.036,3.357,8.393,8.393,8.393h33.574     c5.036,0,8.393-3.357,8.393-8.393C208.836,371.669,205.479,368.311,200.443,368.311z"
                                                        data-v-40bd49ea=""></path>
                                                    <path
                                                        d="M217.229,334.738h-67.148c-5.036,0-8.393,3.357-8.393,8.393c0,5.036,3.357,8.393,8.393,8.393h67.148     c5.036,0,8.393-3.357,8.393-8.393C225.623,338.095,222.266,334.738,217.229,334.738z"
                                                        data-v-40bd49ea=""></path>
                                                    <path
                                                        d="M103.079,292.771h161.993c5.036,0,10.072-2.518,13.43-6.715s4.197-10.072,2.518-15.108L260.875,203.8     c-1.679-6.715-8.394-11.751-15.948-11.751H123.223c-7.554,0-13.43,4.197-15.948,11.751l-20.144,67.148     c-1.679,5.036-0.839,10.911,2.518,15.108C93.007,290.252,98.043,292.771,103.079,292.771z M123.223,208.836h121.705     l20.144,67.148H103.079L123.223,208.836z"
                                                        data-v-40bd49ea=""></path>
                                                    <path
                                                        d="M494.213-1H351.525c-5.036,0-8.393,3.357-8.393,8.393v142.689c0,5.036,3.357,8.393,8.393,8.393h58.754v260.197h-16.787     c-5.036,0-8.393,3.357-8.393,8.393v25.18h-16.787c-5.036,0-8.393,3.357-8.393,8.393v33.574c0,5.036,3.357,8.393,8.393,8.393     h100.721c5.036,0,8.393-3.357,8.393-8.393v-33.574c0-5.036-3.357-8.393-8.393-8.393h-16.787v-25.18     c0-5.036-3.357-8.393-8.393-8.393h-16.787V158.475h67.148c5.036,0,8.393-3.357,8.393-8.393V7.393     C502.607,2.357,499.249-1,494.213-1z M460.639,485.82h-83.934v-16.787h16.787h50.361h16.787V485.82z M435.459,452.246h-33.574     v-16.787h33.574V452.246z M485.82,141.689H359.918V15.787H485.82V141.689z"
                                                        data-v-40bd49ea=""></path>
                                                    <path
                                                        d="M410.279,124.902c5.036,0,8.393-3.357,8.393-8.393V99.721h8.393c18.466,0,33.574-15.108,33.574-33.574     c0-18.466-15.108-33.574-33.574-33.574h-16.787c-5.036,0-8.393,3.357-8.393,8.393v50.361v25.18     C401.885,121.544,405.243,124.902,410.279,124.902z M443.852,66.148c0,9.233-7.554,16.787-16.787,16.787h-8.393V49.361h8.393     C436.298,49.361,443.852,56.915,443.852,66.148z"
                                                        data-v-40bd49ea=""></path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                    10
                                </div>
                                <div class="option-item pool">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        version="1.1" id="Capa_1" x="0px" y="0px" width="32" height="32"
                                        viewBox="0 0 367.928 367.928" xml:space="preserve"
                                        style="enable-background: new 0 0 367.928 367.928" data-v-40bd49ea="">
                                        <g data-v-40bd49ea="">
                                            <g data-v-40bd49ea="">
                                                <path
                                                    d="M367.928,108.589c0-3.866-3.134-7-7-7h-52.529V61.497c0.047-0.718,0.496-6.084,3.566-11.1    c4.119-6.727,11.002-9.859,21.036-9.583c5.459,0.152,12.648,1.244,15.893,5.583c3.208,4.292,1.634,10.425,1.635,10.424    c-1.063,3.717,1.09,7.592,4.807,8.654c3.716,1.061,7.592-1.09,8.654-4.807c0.365-1.278,3.363-12.767-3.751-22.477    c-5.273-7.198-14.307-11.024-26.849-11.372c-19.4-0.548-29.061,8.89-33.74,16.895c-4.841,8.284-5.221,16.487-5.248,17.396    c-0.002,0.07-0.003,0.141-0.003,0.211v40.268h-95.157V61.498c0.047-0.719,0.497-6.084,3.568-11.1    c4.121-6.728,11.003-9.859,21.039-9.583c5.459,0.152,12.648,1.243,15.893,5.583c3.208,4.292,1.634,10.425,1.635,10.424    c-1.063,3.717,1.09,7.592,4.807,8.654c3.718,1.061,7.592-1.09,8.654-4.807c0.365-1.278,3.363-12.767-3.751-22.477    c-5.274-7.198-14.307-11.024-26.849-11.373c-19.418-0.538-29.063,8.89-33.742,16.895c-4.843,8.283-5.224,16.487-5.251,17.395    c-0.002,0.071-0.003,0.141-0.003,0.212v40.268H7c-3.866,0-7,3.134-7,7v119.964c0.219,3.669,3.276,6.578,7,6.578    c10.206,0,14.941,3.747,20.937,8.49c6.82,5.395,14.55,11.51,29.624,11.51s22.803-6.115,29.622-11.511    c5.995-4.743,10.73-8.489,20.935-8.489s14.94,3.747,20.936,8.49c6.819,5.395,14.549,11.51,29.622,11.51    c15.075,0,22.805-6.115,29.624-11.511c5.995-4.743,10.732-8.489,20.937-8.489c10.206,0,14.941,3.747,20.937,8.49    c6.82,5.395,14.549,11.51,29.623,11.51c15.075,0,22.806-6.115,29.626-11.51c5.996-4.744,10.732-8.49,20.94-8.49    c10.207,0,14.943,3.747,20.941,8.49c6.819,5.395,14.554,11.154,29.625,11.51c4.036,0.095,7-3.134,7-7    c0-0.044-0.006-0.085-0.007-0.129c0.002,0,0.005-0.001,0.007-0.002V108.589z M185.241,125.589v102.815    c-2.012,1.381-3.852,2.833-5.627,4.236c-5.996,4.744-10.732,8.49-20.938,8.49c-10.205,0-14.94-3.747-20.936-8.489    c-6.819-5.395-14.548-11.511-29.622-11.511c-15.073,0-22.803,6.115-29.622,11.51c-5.995,4.743-10.73,8.49-20.936,8.49    c-10.206,0-14.941-3.747-20.938-8.49C33,229.774,29.106,226.714,24,224.47c-0.681-0.299-1.386-0.581-2.111-0.849    c-0.071-0.026-0.142-0.053-0.213-0.079c-0.74-0.268-1.501-0.52-2.294-0.75c-0.037-0.011-0.076-0.02-0.113-0.03    c-0.704-0.202-1.434-0.384-2.182-0.552c-0.194-0.044-0.39-0.087-0.587-0.128c-0.81-0.17-1.636-0.326-2.5-0.452V115.589h171.241    V125.589z M294.399,224.015c-5.629,2.276-9.794,5.565-13.662,8.625c-5.997,4.744-10.733,8.49-20.94,8.49    c-10.206,0-14.941-3.747-20.937-8.49c-6.819-5.395-14.549-11.51-29.623-11.51c-3.755,0-7.053,0.38-9.995,1.033v-17.306h95.157    V224.015z M294.399,190.858h-95.157v-30.574h95.157V190.858z M294.399,125.589v20.695h-95.157v-20.695v-10h95.157V125.589z     M339.988,232.641c-6.82-5.395-14.551-11.51-29.626-11.51c-0.675,0-1.318,0.026-1.964,0.05v-95.592v-10h45.529v10v114.816    C348.163,239.097,344.416,236.144,339.988,232.641z"
                                                    data-v-40bd49ea=""></path>
                                                <path
                                                    d="M360.928,284.13c-10.207,0-14.943-3.747-20.94-8.49c-6.82-5.395-14.551-11.51-29.626-11.51    c-15.076,0-22.806,6.115-29.626,11.51c-5.997,4.744-10.733,8.49-20.94,8.49c-10.206,0-14.941-3.747-20.937-8.49    c-6.819-5.395-14.549-11.51-29.623-11.51c-15.074,0-22.803,6.115-29.622,11.51c-5.996,4.744-10.732,8.49-20.938,8.49    c-10.205,0-14.94-3.747-20.936-8.489c-6.819-5.396-14.548-11.511-29.622-11.511c-15.073,0-22.803,6.115-29.622,11.51    c-5.995,4.743-10.73,8.49-20.936,8.49c-10.206,0-14.941-3.747-20.938-8.49C29.804,270.246,22.074,264.13,7,264.13    c-3.866,0-7,3.134-7,7s3.134,7,7,7c10.206,0,14.941,3.747,20.937,8.49c6.82,5.395,14.55,11.51,29.624,11.51    s22.803-6.115,29.622-11.511c5.995-4.743,10.73-8.489,20.935-8.489s14.94,3.747,20.936,8.49    c6.819,5.395,14.549,11.51,29.622,11.51c15.075,0,22.805-6.115,29.624-11.511c5.995-4.743,10.732-8.489,20.937-8.489    c10.206,0,14.941,3.747,20.937,8.49c6.82,5.395,14.549,11.51,29.623,11.51c15.075,0,22.806-6.115,29.626-11.51    c5.996-4.744,10.732-8.49,20.94-8.49c10.207,0,14.943,3.747,20.941,8.49c6.819,5.395,14.55,11.51,29.625,11.51    c3.866,0,7-3.134,7-7S364.794,284.13,360.928,284.13z"
                                                    data-v-40bd49ea=""></path>
                                                <path
                                                    d="M360.928,327.13c-10.207,0-14.943-3.747-20.94-8.49c-6.82-5.395-14.551-11.51-29.626-11.51    c-15.076,0-22.806,6.115-29.626,11.51c-5.997,4.744-10.733,8.49-20.94,8.49c-10.206,0-14.941-3.747-20.937-8.49    c-6.819-5.395-14.549-11.51-29.623-11.51c-15.074,0-22.803,6.115-29.622,11.51c-5.996,4.744-10.732,8.49-20.938,8.49    c-10.205,0-14.94-3.747-20.936-8.489c-6.819-5.396-14.548-11.511-29.622-11.511c-15.073,0-22.803,6.115-29.622,11.51    c-5.995,4.743-10.73,8.49-20.936,8.49c-10.206,0-14.941-3.747-20.938-8.49C29.804,313.246,22.074,307.13,7,307.13    c-3.866,0-7,3.134-7,7s3.134,7,7,7c10.206,0,14.941,3.747,20.937,8.49c6.82,5.395,14.55,11.51,29.624,11.51    s22.803-6.115,29.622-11.511c5.995-4.743,10.73-8.489,20.935-8.489s14.94,3.747,20.936,8.49    c6.819,5.395,14.549,11.51,29.622,11.51c15.075,0,22.805-6.115,29.624-11.511c5.995-4.743,10.732-8.489,20.937-8.489    c10.206,0,14.941,3.747,20.937,8.49c6.82,5.395,14.549,11.51,29.623,11.51c15.075,0,22.806-6.115,29.626-11.51    c5.996-4.744,10.732-8.49,20.94-8.49c10.207,0,14.943,3.747,20.941,8.49c6.819,5.395,14.55,11.51,29.625,11.51    c3.866,0,7-3.134,7-7S364.794,327.13,360.928,327.13z"
                                                    data-v-40bd49ea=""></path>
                                            </g>
                                        </g>
                                    </svg>
                                    1
                                </div>
                                <div class="option-item gym">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                        version="1.1" id="Layer_1" x="0px" y="0px" width="32" height="32"
                                        viewBox="0 0 512.001 512.001" xml:space="preserve"
                                        style="enable-background: new 0 0 512.001 512.001" data-v-40bd49ea="">
                                        <g data-v-40bd49ea="">
                                            <g data-v-40bd49ea="">
                                                <path
                                                    d="M503.351,214.272h-14.765v-12.181c0-25.301-18.441-46.365-42.587-50.49v-1.262c0-28.25-22.985-51.235-51.236-51.235    s-51.236,22.985-51.236,51.235v63.933H168.471V150.34c0-28.25-22.985-51.235-51.236-51.235S65.999,122.09,65.999,150.34v1.262    c-24.146,4.125-42.587,25.188-42.587,50.49v12.181H8.649c-4.777,0-8.649,3.872-8.649,8.649v66.158    c0,4.778,3.872,8.649,8.649,8.649h14.765v12.181c0,25.301,18.441,46.365,42.587,50.49v1.262c0,28.25,22.985,51.235,51.236,51.235    s51.236-22.985,51.236-51.235v-63.933h175.057v63.933c0,28.25,22.985,51.235,51.236,51.235c28.251,0,51.236-22.985,51.236-51.235    V360.4c24.146-4.125,42.587-25.188,42.587-50.49v-12.181h14.765c4.778,0,8.649-3.872,8.649-8.649v-66.158    C512,218.144,508.128,214.272,503.351,214.272z M23.414,280.431h-6.115v-48.86h6.115V280.431z M65.999,342.726    c-14.536-3.834-25.289-17.092-25.289-32.816V202.09c0-15.724,10.751-28.981,25.289-32.816V342.726z M151.173,361.662    c0,18.713-15.225,33.937-33.938,33.937c-18.713,0-33.938-15.224-33.938-33.937V150.339c0-18.713,15.225-33.937,33.938-33.937    c18.713,0,33.938,15.224,33.938,33.937V361.662z M183.925,280.431h-15.454v-48.86h15.454V280.431z M310.777,280.431H201.222    v-48.86h109.555V280.431z M343.529,280.431h-15.453v-48.86h15.453V280.431z M428.701,361.662    c0,18.713-15.225,33.937-33.938,33.937s-33.938-15.224-33.938-33.937V150.339c0-18.713,15.225-33.937,33.938-33.937    s33.938,15.224,33.938,33.937V361.662z M471.288,309.91L471.288,309.91c0,15.724-10.751,28.981-25.289,32.816V169.274    c14.536,3.834,25.289,17.092,25.289,32.816V309.91z M494.702,280.431h-6.115v-48.86h6.115V280.431z"
                                                    data-v-40bd49ea=""></path>
                                            </g>
                                        </g>
                                    </svg>
                                    1
                                </div>
                                <div class="details">
                                    <viewdetails />
                                </div>


                            </div>

                        </div>



                    </div>

                </div>
            </div>
        </section>
    </div>
</template>

<script>
import viewdetails from "@/components/viewdetails.vue"
export default {
    components: {
        viewdetails

    }

}


</script>

<style lang="scss" scoped>
#immo-items-container {
    .container {
        .immo-items-container {
            display: grid;
            gap: 30px;
            grid-template-columns: repeat(12, 1fr);

            .realisation-container {
                grid-column-end: span 6;
                display: flex;
                gap: 10px;
                flex-direction: column;
                --tw-bg-opacity: 1;
                background-color: rgb(255 255 255 / var(--tw-bg-opacity));

                .card{
                    align-items: center;
                }
                .text {
                    a {
                        color: #0c4e91;
                        cursor: pointer;
                        text-decoration: none;
                    }
                }

                .option {
                    display: flex;
                    gap: 10px;
                    align-items: center;

                    .details {
                        font-size: 12px;
                        text-align: right;
                        color: red;
                    }
                }
            }
        }
    }
}

img {
    max-width: 100%;
    height: auto;
    height: 300px;
    display: block;
    width: 100%;
}
</style>