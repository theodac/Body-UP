var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
/**
 * @name AES256
 * @description
 * This cordova ionic plugin allows you to perform AES 256 encryption and decryption on the plain text.
 * It's a cross-platform plugin which supports both Android and iOS.
 * The encryption and decryption are performed on the device native layer so that the performance is much faster.
 *
 * @usage
 * ```typescript
 * import { AES256 } from '@ionic-native/aes-256';
 *
 * private secureKey: string;
 * private secureIV: string;
 *
 * constructor(private aes256: AES256) {
 *    this.generateSecureKeyAndIV(); // To generate the random secureKey and secureIV
 * }
 *
 * ...
 *
 * async generateSecureKeyAndIV() {
 *    this.secureKey = await this.aes256.generateSecureKey('random password 12345'); // Returns a 32 bytes string
 *    this.secureIV = await this.aes256.generateSecureIV('random password 12345'); // Returns a 16 bytes string
 * }
 *
 * this.aes256.encrypt(this.secureKey, this.secureIV, 'testdata')
 *   .then(res => console.log('Encrypted Data: ',res))
 *   .catch((error: any) => console.error(error));
 *
 * this.aes256.decrypt(this.secureKey, this.secureIV, 'encryptedData')
 *   .then(res => console.log('Decrypted Data : ',res))
 *   .catch((error: any) => console.error(error));
 *
 *
 * * this.aes256.generateSecureKey('random password 12345')
 *   .then(res => console.log('Secure Key : ',res))
 *   .catch((error: any) => console.error(error));
 *
 *
 * * this.aes256.generateSecureIV('random password 12345')
 *   .then(res => console.log('Secure IV : ',res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
var AES256 = (function (_super) {
    __extends(AES256, _super);
    function AES256() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * This function used to perform the aes256 encryption
     * @param {string} secureKey A 32 bytes string, which will used as input key for AES256 encryption.
     * @param {string} secureIV A 16 bytes string, which will used as initial vector for AES256 encryption.
     * @param {string} data A string which will be encrypted
     * @return {Promise<string>} Returns a promise that resolves when encryption happens. The success response will returns encrypted data.
     */
    /**
       * This function used to perform the aes256 encryption
       * @param {string} secureKey A 32 bytes string, which will used as input key for AES256 encryption.
       * @param {string} secureIV A 16 bytes string, which will used as initial vector for AES256 encryption.
       * @param {string} data A string which will be encrypted
       * @return {Promise<string>} Returns a promise that resolves when encryption happens. The success response will returns encrypted data.
       */
    AES256.prototype.encrypt = /**
       * This function used to perform the aes256 encryption
       * @param {string} secureKey A 32 bytes string, which will used as input key for AES256 encryption.
       * @param {string} secureIV A 16 bytes string, which will used as initial vector for AES256 encryption.
       * @param {string} data A string which will be encrypted
       * @return {Promise<string>} Returns a promise that resolves when encryption happens. The success response will returns encrypted data.
       */
    function (secureKey, secureIV, data) {
        return;
    };
    /**
     * This function used to perform the aes256 decryption
     * @param {string} secureKey A 32 bytes string, which will used as input key for AES256 decryption.
     * @param {string} secureIV A 16 bytes string, which will used as initial vector for AES256 decryption.
     * @param {string} data An AES256 encrypted data which will be decrypted.
     * @return {Promise<string>} Returns a promise that resolves when decryption happens. The success response will returns decrypted data.
     */
    /**
       * This function used to perform the aes256 decryption
       * @param {string} secureKey A 32 bytes string, which will used as input key for AES256 decryption.
       * @param {string} secureIV A 16 bytes string, which will used as initial vector for AES256 decryption.
       * @param {string} data An AES256 encrypted data which will be decrypted.
       * @return {Promise<string>} Returns a promise that resolves when decryption happens. The success response will returns decrypted data.
       */
    AES256.prototype.decrypt = /**
       * This function used to perform the aes256 decryption
       * @param {string} secureKey A 32 bytes string, which will used as input key for AES256 decryption.
       * @param {string} secureIV A 16 bytes string, which will used as initial vector for AES256 decryption.
       * @param {string} data An AES256 encrypted data which will be decrypted.
       * @return {Promise<string>} Returns a promise that resolves when decryption happens. The success response will returns decrypted data.
       */
    function (secureKey, secureIV, data) {
        return;
    };
    /**
     * This function used to generate a secure key based on an password. Perfect if you want to delegate the key generation for encryption to the plugin.
     * Make sure to save the return value of this function somewhere so your encrypted data can be decrypted in the future.
     * @param {string} password A random string, which will be used as input for a PBKDF2 function
     * @return {Promise<string>} Returns a promise that resolves when key is generated.
     */
    /**
       * This function used to generate a secure key based on an password. Perfect if you want to delegate the key generation for encryption to the plugin.
       * Make sure to save the return value of this function somewhere so your encrypted data can be decrypted in the future.
       * @param {string} password A random string, which will be used as input for a PBKDF2 function
       * @return {Promise<string>} Returns a promise that resolves when key is generated.
       */
    AES256.prototype.generateSecureKey = /**
       * This function used to generate a secure key based on an password. Perfect if you want to delegate the key generation for encryption to the plugin.
       * Make sure to save the return value of this function somewhere so your encrypted data can be decrypted in the future.
       * @param {string} password A random string, which will be used as input for a PBKDF2 function
       * @return {Promise<string>} Returns a promise that resolves when key is generated.
       */
    function (password) {
        return;
    };
    /**
     * This function used to generate a secure IV based on an password. Perfect if you want to delegate the IV generation for encryption to the plugin.
     * Make sure to save the return value of this function somewhere so your encrypted data can be decrypted in the future.
     * @param {string} password A random string, which will be used as input for a PBKDF2 function
     * @return {Promise<string>} Returns a promise that resolves when IV is generated.
     */
    /**
       * This function used to generate a secure IV based on an password. Perfect if you want to delegate the IV generation for encryption to the plugin.
       * Make sure to save the return value of this function somewhere so your encrypted data can be decrypted in the future.
       * @param {string} password A random string, which will be used as input for a PBKDF2 function
       * @return {Promise<string>} Returns a promise that resolves when IV is generated.
       */
    AES256.prototype.generateSecureIV = /**
       * This function used to generate a secure IV based on an password. Perfect if you want to delegate the IV generation for encryption to the plugin.
       * Make sure to save the return value of this function somewhere so your encrypted data can be decrypted in the future.
       * @param {string} password A random string, which will be used as input for a PBKDF2 function
       * @return {Promise<string>} Returns a promise that resolves when IV is generated.
       */
    function (password) {
        return;
    };
    AES256.decorators = [
        { type: Injectable },
    ];
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String]),
        __metadata("design:returntype", Promise)
    ], AES256.prototype, "encrypt", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String]),
        __metadata("design:returntype", Promise)
    ], AES256.prototype, "decrypt", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], AES256.prototype, "generateSecureKey", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], AES256.prototype, "generateSecureIV", null);
    /**
     * @name AES256
     * @description
     * This cordova ionic plugin allows you to perform AES 256 encryption and decryption on the plain text.
     * It's a cross-platform plugin which supports both Android and iOS.
     * The encryption and decryption are performed on the device native layer so that the performance is much faster.
     *
     * @usage
     * ```typescript
     * import { AES256 } from '@ionic-native/aes-256';
     *
     * private secureKey: string;
     * private secureIV: string;
     *
     * constructor(private aes256: AES256) {
     *    this.generateSecureKeyAndIV(); // To generate the random secureKey and secureIV
     * }
     *
     * ...
     *
     * async generateSecureKeyAndIV() {
     *    this.secureKey = await this.aes256.generateSecureKey('random password 12345'); // Returns a 32 bytes string
     *    this.secureIV = await this.aes256.generateSecureIV('random password 12345'); // Returns a 16 bytes string
     * }
     *
     * this.aes256.encrypt(this.secureKey, this.secureIV, 'testdata')
     *   .then(res => console.log('Encrypted Data: ',res))
     *   .catch((error: any) => console.error(error));
     *
     * this.aes256.decrypt(this.secureKey, this.secureIV, 'encryptedData')
     *   .then(res => console.log('Decrypted Data : ',res))
     *   .catch((error: any) => console.error(error));
     *
     *
     * * this.aes256.generateSecureKey('random password 12345')
     *   .then(res => console.log('Secure Key : ',res))
     *   .catch((error: any) => console.error(error));
     *
     *
     * * this.aes256.generateSecureIV('random password 12345')
     *   .then(res => console.log('Secure IV : ',res))
     *   .catch((error: any) => console.error(error));
     *
     * ```
     */
    AES256 = __decorate([
        Plugin({
            pluginName: 'AES256',
            plugin: 'cordova-plugin-aes256-encryption',
            pluginRef: 'cordova.plugins.AES256',
            repo: 'https://github.com/Ideas2IT/cordova-aes256',
            platforms: ['Android', 'iOS'],
            install: 'ionic cordova plugin add cordova-plugin-aes256-encryption'
        })
    ], AES256);
    return AES256;
}(IonicNativePlugin));
export { AES256 };
//# sourceMappingURL=index.js.map