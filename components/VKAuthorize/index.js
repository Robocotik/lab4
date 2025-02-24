// import * as VKID from '@vkid/sdk';
export class VKAuthorize {
  getHTML = () => {
    return `
 <div>
        <script src="https://unpkg.com/@vkid/sdk@<3.0.0/dist-sdk/umd/index.js"></script>
        <script type="text/javascript">
            if ('VKIDSDK' in window) {
                const VKID = window.VKIDSDK;

                VKID.Config.init({
                    app: 53102595,
                    redirectUrl: 'https://oauth.vk.com/blank.html',
                    responseMode: VKID.ConfigResponseMode.Callback,
                    source: VKID.ConfigSource.LOWCODE,
                    scope: '', // Заполните нужными доступами по необходимости
                });

                const oneTap = new VKID.OneTap();

                oneTap.render({
                    container: document.currentScript.parentElement,
                    showAlternativeLogin: true
                })
                    .on(VKID.WidgetEvents.ERROR, vkidOnError)
                    .on(VKID.OneTapInternalEvents.LOGIN_SUCCESS, function (payload) {
                        const code = payload.code;
                        const deviceId = payload.device_id;

                        VKID.Auth.exchangeCode(code, deviceId)
                            .then(vkidOnSuccess)
                            .catch(vkidOnError);
                    });

                function vkidOnSuccess(data) {
                    // Обработка полученного результата
                }

                function vkidOnError(error) {
                    // Обработка ошибки
                }
            }
        </script>
    </div>
        `;
  };

  render() {
    const root = document.querySelector('body');
    root.insertAdjacentHTML('beforeend', this.getHTML());
    console.log('ВК ОТРИОСВАЛСЯ');
  }
}
