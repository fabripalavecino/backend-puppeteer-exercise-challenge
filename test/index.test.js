const request = require('supertest');
const init = require('../src');
const knex = require('knex')
const mockDb = require('mock-knex');
const db = knex({
    client: 'pg',
    connection: {
      host: process.env.HOST,
      user: process.env.USER_DB,
      password: process.env.PASSWORD_DB,
      database: process.env.DATABASE
    }
  });


  mockDb.mock(db)


describe("GET /scrapp", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(init).get("/scrapp").send();
      expect(response.statusCode).toBe(200);
    });
  
    test("should respond an array", async () => {
      const response = await request(init).get("/scrapp").send();
      expect(response.body).toBeInstanceOf(Array);
    });
  });
  





// const processDataTable = require('./mock/processDataTableMocked');
// const fs = require('fs');
// const path = require('path');
// const { TextEncoder, TextDecoder } = require('util')
// global.TextEncoder = TextEncoder
// global.TextDecoder = TextDecoder
// const {JSDOM} = require('jsdom');
// const html = fs.readFileSync(path.resolve(__dirname,'./mock/table.html'), 'utf8');




// jest
//     .dontMock('fs');

// describe('processDataTableFunction', () => {
//     beforeEach(() => {
        


//     })
    
//     const dom = new JSDOM(`<!DOCTYPE html><html lang="en"><body> <table style="border-spacing: 24px 16px; border-collapse: separate; width: max-content; min-height: 200px;"> <tbody style="width: 100%;"> <tr> <th style="text-align: start;"><span class="sc-bcXHqe vNBMw ub-fnt-sze_14px ub-f-wght_400 ub-ln-ht_20px ub-ltr-spc_-0-05px ub-fnt-fam_1pr80e8 ub-color_474d66 ub-box-szg_border-box">Fecha </span></th> <th style="text-align: start;"><span class="sc-bcXHqe vNBMw ub-fnt-sze_14px ub-f-wght_400 ub-ln-ht_20px ub-ltr-spc_-0-05px ub-fnt-fam_1pr80e8 ub-color_474d66 ub-box-szg_border-box">Destinatario</span> </th> <th style="text-align: start; padding-left: 11px;"><span class="sc-bcXHqe vNBMw ub-fnt-sze_14px ub-f-wght_400 ub-ln-ht_20px ub-ltr-spc_-0-05px ub-fnt-fam_1pr80e8 ub-color_474d66 ub-box-szg_border-box">Tipo de Comprobante</span></th> <th style="text-align: start; display: flex; align-items: center; gap: 6px; padding-left: 11px;"><span class="sc-bcXHqe vNBMw ub-fnt-sze_14px ub-f-wght_400 ub-ln-ht_20px ub-ltr-spc_-0-05px ub-fnt-fam_1pr80e8 ub-color_474d66 ub-box-szg_border-box">Monto en Pesos</span> <div class="ub-dspl_flex ub-algn-itms_center ub-gap_8px ub-crsr_pointer ub-box-szg_border-box" aria-describedby="evergreen-tooltip-4"><svg width="16" height="16" viewBox="0 0 16 16" fill="#767676" xmlns="http://www.w3.org/2000/svg" icon="Info" size="16" class="sc-gswNZR jOIfZS"> <path d="M7.99998 1.33344C4.31798 1.33344 1.33331 4.3181 1.33331 8.0001C1.33331 11.6821 4.31798 14.6668 7.99998 14.6668C11.682 14.6668 14.6666 11.6821 14.6666 8.0001C14.6666 4.3181 11.682 1.33344 7.99998 1.33344ZM8.66665 11.3334H7.33331V7.33343H8.66665V11.3334ZM8.66665 6.0001H7.33331V4.66677H8.66665V6.0001Z" fill="black"></path> </svg></div></th> <th style="text-align: start; padding-left: 11px;"><span class="sc-bcXHqe vNBMw ub-fnt-sze_14px ub-f-wght_400 ub-ln-ht_20px ub-ltr-spc_-0-05px ub-fnt-fam_1pr80e8 ub-color_474d66 ub-box-szg_border-box">Acciones</span> </th> </tr><tr style="border-spacing: 24px 15px;"> <td><span class="sc-bcXHqe vNBMw ub-fnt-sze_14px ub-f-wght_400 ub-ln-ht_20px ub-ltr-spc_-0-05px ub-fnt-fam_1pr80e8 ub-color_474d66 ub-box-szg_border-box">18 de enero 2023</span></td><td><span class="sc-bcXHqe vNBMw ub-fnt-sze_14px ub-f-wght_400 ub-ln-ht_20px ub-ltr-spc_-0-05px ub-fnt-fam_1pr80e8 ub-color_474d66 ub-box-szg_border-box">Factura E EEUU</span></td><td style="padding-left: 11px;"><span class="sc-bcXHqe vNBMw ub-fnt-sze_14px ub-f-wght_400 ub-ln-ht_20px ub-ltr-spc_-0-05px ub-fnt-fam_1pr80e8 ub-color_474d66 ub-box-szg_border-box">Factura de Exportación E</span></td><td style="padding-left: 11px;"><span class="sc-bcXHqe vNBMw ub-fnt-sze_14px ub-f-wght_400 ub-ln-ht_20px ub-ltr-spc_-0-05px ub-fnt-fam_1pr80e8 ub-color_474d66 ub-box-szg_border-box">$364,98</span> </td><td style="display: flex; align-items: center; gap: 8px; padding-left: 11px;"><button class="css-iq51en sc-eDvSVe cuNEeJ ub-pst_relative ub-f-wght_500 ub-dspl_inline-flex ub-algn-itms_center ub-flx-wrap_nowrap ub-just-cnt_center ub-txt-deco_none ub-ver-algn_middle ub-b-btm_1px-solid-transparent ub-b-lft_1px-solid-transparent ub-b-rgt_1px-solid-transparent ub-b-top_1px-solid-transparent ub-otln_iu2jf4 ub-usr-slct_none ub-crsr_pointer ub-wht-spc_nowrap ub-fnt-fam_1pr80e8 ub-bblr_4px ub-bbrr_4px ub-btlr_4px ub-btrr_4px ub-color_474d66 ub-tstn_n1akt6 ub-h_24px ub-min-w_24px ub-fnt-sze_12px ub-ln-ht_24px ub-pl_12px ub-pr_12px ub-min-h_30px ub-box-szg_border-box" iconposition="start"><svg width="16" height="16" viewBox="0 0 16 16" fill="black" xmlns="http://www.w3.org/2000/svg" icon="Download" size="12" class="sc-gswNZR VujCD"> <path d="M7.33331 1.33344C6.96531 1.33344 6.66665 1.6321 6.66665 2.0001V7.33343H3.99998L7.99998 11.3334L12 7.33343H9.33331V2.0001C9.33331 1.6321 9.03465 1.33344 8.66665 1.33344H7.33331ZM1.33331 13.3334V14.6668H14.6666V13.3334H1.33331Z" fill="black"></path> </svg><span class="sc-bcXHqe cVCTZt sc-jSUZER caAZaV ub-fnt-sze_14px ub-f-wght_400 ub-ln-ht_20px ub-ltr-spc_-0-05px ub-fnt-fam_1pr80e8 ub-color_474d66 ub-box-szg_border-box" appearance="secondary" weight="semiBold">Descargar</span></button></td></tr></tbody> </table></body></html>`)


      

//     test('it should return a result',() => {
//         const tableData = dom.window.document.querySelector('table tbody');
//         console.log(tableData);
//         const result = processDataTable(tableData);
//         console.log(result);
//         expect(result).toBe({DATE: '18 de enero 2023', TYPE: 'Factura de Exportación E', AMMOUNT: '$364,98', STATE: 'Completed'})
//     })

// })

