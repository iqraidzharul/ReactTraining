/**
 * @author: Dwi Setiyadi
 */

/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */

import 'dotenv/config';
const exec = require('child_process').exec;
import { Client } from 'pg';

const InjectSeed = async (): Promise<any> => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    exec(`psql -h ${process.env.TYPEORM_HOST} -U ${process.env.TYPEORM_USERNAME} vanilla -c 'CREATE DATABASE "${process.env.TYPEORM_DATABASE}";'`, (error: any, stdout: any, stderr: any) => {
      if (error) {
        //   console.error(`exec error: ${error}`);
        //   return;
      }
      // console.log(`stdout: ${stdout}`);
      // console.log(`stderr: ${stderr}`);
    
      const config: any = {
        user: process.env.TYPEORM_USERNAME,
        host: process.env.TYPEORM_HOST,
        database: process.env.TYPEORM_DATABASE,
        password: process.env.TYPEORM_PASSWORD,
        port: process.env.TYPEORM_PORT,
      };
//       const client = new Client(config);

//       client.connect();
//       client.query(`--
// -- database dump
// --

// -- Dumped from database version 9.5.14
// -- Dumped by pg_dump version 9.5.5

// -- Started on 2019-07-30 14:55:34

// -- CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
// -- CREATE EXTENSION IF NOT EXISTS "pgcrypto";

// SET statement_timeout = 0;
// SET lock_timeout = 0;
// SET client_encoding = 'UTF8';
// SET standard_conforming_strings = on;
// SET check_function_bodies = false;
// SET client_min_messages = warning;
// SET row_security = off;

// --
// -- TOC entry 2344 (class 1262 OID 49288)
// -- Name: Moefis; Type: DATABASE; Schema: -; Owner: ${process.env.TYPEORM_USERNAME}
// --

// -- CREATE DATABASE "Moefis" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';


// ALTER DATABASE "${process.env.TYPEORM_DATABASE}" OWNER TO ${process.env.TYPEORM_USERNAME};

// -- \connect "Moefis"

// SET statement_timeout = 0;
// SET lock_timeout = 0;
// SET client_encoding = 'UTF8';
// SET standard_conforming_strings = on;
// SET check_function_bodies = false;
// SET client_min_messages = warning;
// SET row_security = off;

// --
// -- TOC entry 1 (class 3079 OID 12355)
// -- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
// --

// CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


// --
// -- TOC entry 2347 (class 0 OID 0)
// -- Dependencies: 1
// -- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
// --

// COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


// --
// -- TOC entry 2 (class 3079 OID 49289)
// -- Name: uuid-ossp; Type: EXTENSION; Schema: -; Owner: 
// --

// CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;


// --
// -- TOC entry 2348 (class 0 OID 0)
// -- Dependencies: 2
// -- Name: EXTENSION "uuid-ossp"; Type: COMMENT; Schema: -; Owner: 
// --

// COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';


// SET search_path = public, pg_catalog;

// SET default_tablespace = '';

// SET default_with_oids = false;

// --
// -- TOC entry 200 (class 1259 OID 57460)
// -- Name: account; Type: TABLE; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// CREATE TABLE account (
//     id uuid DEFAULT uuid_generate_v4() NOT NULL,
//     code character varying(50) NOT NULL,
//     alias character varying(50) NOT NULL,
//     description character varying(300),
//     "normalBalance" integer,
//     "attribute1Name" character varying(100),
//     "attribute1IsMandatory" boolean,
//     "attribute1Type" character varying(100),
//     "attribute1Length" integer,
//     "attribute2Name" character varying(100),
//     "attribute2IsMandatory" boolean,
//     "attribute2Type" character varying(100),
//     "attribute2Length" integer,
//     "attribute3Name" character varying(100),
//     "attribute3IsMandatory" boolean,
//     "attribute3Type" character varying(100),
//     "attribute3Length" integer,
//     "attribute4Name" character varying(100),
//     "attribute4IsMandatory" boolean,
//     "attribute4Type" character varying(100),
//     "attribute4Length" integer,
//     "attribute5Name" character varying(100),
//     "attribute5IsMandatory" boolean,
//     "attribute5Type" character varying(100),
//     "attribute5Length" integer,
//     "attribute6Name" character varying(100),
//     "attribute6IsMandatory" boolean,
//     "attribute6Type" character varying(100),
//     "attribute6Length" integer,
//     "attribute7Name" character varying(100),
//     "attribute7IsMandatory" boolean,
//     "attribute7Type" character varying(100),
//     "attribute7Length" integer,
//     "attribute8Name" character varying(100),
//     "attribute8IsMandatory" boolean,
//     "attribute8Type" character varying(100),
//     "attribute8Length" integer,
//     "attribute9Name" character varying(100),
//     "attribute9IsMandatory" boolean,
//     "attribute9Type" character varying(100),
//     "attribute9Length" integer,
//     "attribute10Name" character varying(100),
//     "attribute10IsMandatory" boolean,
//     "attribute10Type" character varying(100),
//     "attribute10Length" integer,
//     "reference1Name" character varying(100),
//     "reference1IsMandatory" boolean,
//     "reference1Type" character varying(100),
//     "reference1Length" integer,
//     "reference2Name" character varying(100),
//     "reference2IsMandatory" boolean,
//     "reference2Type" character varying(100),
//     "reference2Length" integer,
//     "reference3Name" character varying(100),
//     "reference3IsMandatory" boolean,
//     "reference3Type" character varying(100),
//     "reference3Length" integer,
//     "reference4Name" character varying(100),
//     "reference4IsMandatory" boolean,
//     "reference4Type" character varying(100),
//     "reference4Length" integer,
//     "reference5Name" character varying(100),
//     "reference5IsMandatory" boolean,
//     "reference5Type" character varying(100),
//     "reference5Length" integer,
//     "reference6Name" character varying(100),
//     "reference6IsMandatory" boolean,
//     "reference6Type" character varying(100),
//     "reference6Length" integer,
//     "reference7Name" character varying(100),
//     "reference7IsMandatory" boolean,
//     "reference7Type" character varying(100),
//     "reference7Length" integer,
//     "reference8Name" character varying(100),
//     "reference8IsMandatory" boolean,
//     "reference8Type" character varying(100),
//     "reference8Length" integer,
//     "reference9Name" character varying(100),
//     "reference9IsMandatory" boolean,
//     "reference9Type" character varying(100),
//     "reference9Length" integer,
//     "reference10Name" character varying(100),
//     "reference10IsMandatory" boolean,
//     "reference10Type" character varying(100),
//     "reference10Length" integer,
//     "createdBy" character varying(100) NOT NULL,
//     "createdDate" timestamp without time zone DEFAULT now() NOT NULL,
//     "lastUpdatedBy" character varying(100),
//     "lastUpdatedDate" timestamp without time zone DEFAULT now(),
//     "activeFlag" boolean NOT NULL
// );


// ALTER TABLE account OWNER TO ${process.env.TYPEORM_USERNAME};

// --
// -- TOC entry 188 (class 1259 OID 49364)
// -- Name: accounting_book; Type: TABLE; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// CREATE TABLE accounting_book (
//     id uuid DEFAULT uuid_generate_v4() NOT NULL,
//     code character varying(50) NOT NULL,
//     name character varying(100),
//     description character varying(300),
//     "effectiveStartDate" date,
//     "effectiveEndDate" date,
//     "createdBy" character varying(100) NOT NULL,
//     "createdDate" timestamp without time zone DEFAULT now() NOT NULL,
//     "lastUpdatedBy" character varying(100),
//     "lastUpdatedDate" timestamp without time zone DEFAULT now(),
//     "activeFlag" boolean
// );


// ALTER TABLE accounting_book OWNER TO ${process.env.TYPEORM_USERNAME};

// --
// -- TOC entry 196 (class 1259 OID 49437)
// -- Name: accounting_period; Type: TABLE; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// CREATE TABLE accounting_period (
//     id uuid DEFAULT uuid_generate_v4() NOT NULL,
//     code character varying(50) NOT NULL,
//     name character varying(100) NOT NULL,
//     "startDate" date,
//     "endDate" date,
//     state character varying(5) NOT NULL,
//     "isAdjusting" boolean NOT NULL,
//     "createdBy" character varying(100) NOT NULL,
//     "createdDate" timestamp without time zone DEFAULT now() NOT NULL,
//     "lastUpdatedBy" character varying(100),
//     "lastUpdatedDate" timestamp without time zone DEFAULT now(),
//     "activeFlag" boolean NOT NULL
// );


// ALTER TABLE accounting_period OWNER TO ${process.env.TYPEORM_USERNAME};

// --
// -- TOC entry 187 (class 1259 OID 49355)
// -- Name: aj_header; Type: TABLE; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// CREATE TABLE aj_header (
//     "headerId" uuid DEFAULT uuid_generate_v4() NOT NULL,
//     "headerCode" character varying,
//     "transactionCategoryId" character varying,
//     "transactionCategoryName" character varying,
//     "transactionSubCategoryId" character varying,
//     "transactionSubCategoryName" character varying,
//     "accountingPeriodId" character varying NOT NULL,
//     "accountingPeriodCode" character varying NOT NULL,
//     "accountingDate" timestamp without time zone NOT NULL,
//     description character varying NOT NULL,
//     "postingState" character varying NOT NULL,
//     "postingDate" timestamp without time zone,
//     "postingCode" character varying,
//     "accountingBookId" character varying,
//     "companyId" character varying,
//     "companyCode" character varying,
//     "companyName" character varying,
//     "organizationId" character varying,
//     "organizationCode" character varying,
//     "organizationName" character varying,
//     "productId" character varying,
//     "productCode" character varying,
//     "productName" character varying,
//     "projectId" character varying,
//     "projectCode" character varying,
//     "projectName" character varying,
//     "costCenterId" character varying,
//     "costCenterCode" character varying,
//     "costCenterName" character varying,
//     "customerId" character varying,
//     "customerCode" character varying,
//     "customerName" character varying,
//     "currencyCode" character varying,
//     "actualEnteredAmount" numeric(24,4),
//     "budgetEnteredAmount" numeric(24,4),
//     "exchangeRate" numeric(24,4) NOT NULL,
//     "actualAccountedAmount" numeric(24,4),
//     "budgetAccountedAmount" numeric(24,4),
//     "isCorrection" boolean,
//     "correctionAjCode" character varying,
//     "createdBy" character varying,
//     "createdDate" timestamp without time zone NOT NULL,
//     "lastUpdatedBy" character varying,
//     "lastUpdatedDate" timestamp without time zone NOT NULL,
//     "activeFlag" boolean
// );


// ALTER TABLE aj_header OWNER TO ${process.env.TYPEORM_USERNAME};

// --
// -- TOC entry 189 (class 1259 OID 49375)
// -- Name: aj_lines; Type: TABLE; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// CREATE TABLE aj_lines (
//     "lineId" uuid DEFAULT uuid_generate_v4() NOT NULL,
//     "lineNo" integer NOT NULL,
//     description character varying(300),
//     "transactionCategoryName" character varying(50) NOT NULL,
//     "transactionSubCategoryName" character varying(50),
//     "transactionTypeName" character varying(50) NOT NULL,
//     "companyId" character varying(50) NOT NULL,
//     "companyCode" character varying(50) NOT NULL,
//     "companyName" character varying(100) NOT NULL,
//     "organizationId" character varying(50) NOT NULL,
//     "organizationCode" character varying(50) NOT NULL,
//     "organizationName" character varying(100) NOT NULL,
//     "productId" character varying(50),
//     "productCode" character varying(50),
//     "productName" character varying(100),
//     "projectId" character varying(50),
//     "projectCode" character varying(50),
//     "projectName" character varying(100),
//     "costCenterId" character varying(50),
//     "costCenterCode" character varying(50),
//     "costCenterName" character varying(100),
//     "customerId" character varying(50),
//     "customerCode" character varying(50),
//     "customerName" character varying(100),
//     "journalEntryType" character varying(5),
//     "enteredAmount" numeric(24,4),
//     "currencyCode" character varying(50) NOT NULL,
//     "exchangeRate" numeric(24,4) NOT NULL,
//     "accountedAmount" numeric(24,4),
//     "accountingBookId" character varying,
//     attribute1 character varying(100),
//     attribute2 character varying(100),
//     attribute3 character varying(100),
//     attribute4 character varying(100),
//     attribute5 character varying(100),
//     attribute6 character varying(100),
//     attribute7 character varying(100),
//     attribute8 character varying(100),
//     attribute9 character varying(100),
//     attribute10 character varying(100),
//     reference1 character varying(100),
//     reference2 character varying(100),
//     reference3 character varying(100),
//     reference4 character varying(100),
//     reference5 character varying(100),
//     reference6 character varying(100),
//     reference7 character varying(100),
//     reference8 character varying(100),
//     reference9 character varying(100),
//     reference10 character varying(100),
//     "createdBy" character varying(100) NOT NULL,
//     "createdDate" timestamp without time zone DEFAULT now() NOT NULL,
//     "lastUpdatedBy" character varying(100),
//     "lastUpdatedDate" timestamp without time zone DEFAULT now(),
//     "activeFlag" boolean NOT NULL,
//     "ajheaderHeaderId" uuid,
//     "transactioncategoryId" uuid,
//     "transactionsubcategoryId" uuid,
//     "transactiontypeId" uuid
// );


// ALTER TABLE aj_lines OWNER TO ${process.env.TYPEORM_USERNAME};

// --
// -- TOC entry 194 (class 1259 OID 49421)
// -- Name: company; Type: TABLE; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// CREATE TABLE company (
//     id uuid DEFAULT uuid_generate_v4() NOT NULL,
//     code character varying(50) NOT NULL,
//     name character varying(100) NOT NULL,
//     "effectiveStartDate" date,
//     "effectiveEndDate" date,
//     "createdBy" character varying(100) NOT NULL,
//     "createdDate" timestamp without time zone DEFAULT now() NOT NULL,
//     "lastUpdatedBy" character varying(100),
//     "lastUpdatedDate" timestamp without time zone DEFAULT now(),
//     "activeFlag" boolean NOT NULL
// );


// ALTER TABLE company OWNER TO ${process.env.TYPEORM_USERNAME};

// --
// -- TOC entry 183 (class 1259 OID 49311)
// -- Name: cost_center; Type: TABLE; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// CREATE TABLE cost_center (
//     id uuid DEFAULT uuid_generate_v4() NOT NULL,
//     code character varying(50) NOT NULL,
//     name character varying(100),
//     description character varying(300),
//     "effectiveStartDate" date,
//     "effectiveEndDate" date,
//     "createdBy" character varying(100) NOT NULL,
//     "createdDate" timestamp without time zone DEFAULT now() NOT NULL,
//     "lastUpdatedBy" character varying(100),
//     "lastUpdatedDate" timestamp without time zone DEFAULT now(),
//     "activeFlag" boolean NOT NULL,
//     "organizationId" uuid
// );


// ALTER TABLE cost_center OWNER TO ${process.env.TYPEORM_USERNAME};

// --
// -- TOC entry 197 (class 1259 OID 49445)
// -- Name: currency; Type: TABLE; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// CREATE TABLE currency (
//     id uuid DEFAULT uuid_generate_v4() NOT NULL,
//     code character varying(5) NOT NULL,
//     name character varying(100) NOT NULL,
//     "effectiveStartDate" date,
//     "effectiveEndDate" date,
//     "createdBy" character varying(100) NOT NULL,
//     "createdDate" timestamp without time zone DEFAULT now() NOT NULL,
//     "lastUpdatedBy" character varying(100),
//     "lastUpdatedDate" timestamp without time zone DEFAULT now(),
//     "activeFlag" boolean NOT NULL
// );


// ALTER TABLE currency OWNER TO ${process.env.TYPEORM_USERNAME};

// --
// -- TOC entry 184 (class 1259 OID 49322)
// -- Name: customer; Type: TABLE; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// CREATE TABLE customer (
//     id uuid DEFAULT uuid_generate_v4() NOT NULL,
//     code character varying(50) NOT NULL,
//     name character varying(100),
//     description character varying(300),
//     "effectiveStartDate" date,
//     "effectiveEndDate" date,
//     "createdBy" character varying(100) NOT NULL,
//     "createdDate" timestamp without time zone DEFAULT now() NOT NULL,
//     "lastUpdatedBy" character varying(100),
//     "lastUpdatedDate" timestamp without time zone DEFAULT now(),
//     "activeFlag" boolean NOT NULL,
//     "organizationId" uuid
// );


// ALTER TABLE customer OWNER TO ${process.env.TYPEORM_USERNAME};

// --
// -- TOC entry 199 (class 1259 OID 57452)
// -- Name: evidence; Type: TABLE; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// CREATE TABLE evidence (
//     id uuid DEFAULT uuid_generate_v4() NOT NULL,
//     "fileName" character varying(200) NOT NULL,
//     "createdBy" character varying(100) NOT NULL,
//     "createdDate" timestamp without time zone DEFAULT now() NOT NULL,
//     "lastUpdatedBy" character varying(100),
//     "lastUpdatedDate" timestamp without time zone DEFAULT now(),
//     "activeFlag" boolean NOT NULL,
//     "ajheaderHeaderId" uuid
// );


// ALTER TABLE evidence OWNER TO ${process.env.TYPEORM_USERNAME};

// --
// -- TOC entry 195 (class 1259 OID 49429)
// -- Name: organization; Type: TABLE; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// CREATE TABLE organization (
//     id uuid DEFAULT uuid_generate_v4() NOT NULL,
//     code character varying(50) NOT NULL,
//     name character varying(100) NOT NULL,
//     type character varying(5) NOT NULL,
//     "effectiveStartDate" date,
//     "effectiveEndDate" date,
//     "createdBy" character varying(100) NOT NULL,
//     "createdDate" timestamp without time zone DEFAULT now() NOT NULL,
//     "lastUpdatedBy" character varying(100),
//     "lastUpdatedDate" timestamp without time zone DEFAULT now(),
//     "activeFlag" boolean NOT NULL,
//     "companyId" uuid
// );


// ALTER TABLE organization OWNER TO ${process.env.TYPEORM_USERNAME};

// --
// -- TOC entry 202 (class 1259 OID 65644)
// -- Name: posting_code_temp; Type: TABLE; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// CREATE TABLE posting_code_temp (
//     id uuid DEFAULT uuid_generate_v4() NOT NULL,
//     sequence character varying(50) NOT NULL,
//     period character varying(50) NOT NULL,
//     type character varying(50) NOT NULL,
//     "createdBy" character varying(100) NOT NULL,
//     "createdDate" timestamp without time zone DEFAULT now() NOT NULL,
//     "lastUpdatedBy" character varying(100),
//     "lastUpdatedDate" timestamp without time zone DEFAULT now(),
//     "activeFlag" boolean NOT NULL
// );


// ALTER TABLE posting_code_temp OWNER TO ${process.env.TYPEORM_USERNAME};

// --
// -- TOC entry 185 (class 1259 OID 49333)
// -- Name: product; Type: TABLE; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// CREATE TABLE product (
//     id uuid DEFAULT uuid_generate_v4() NOT NULL,
//     code character varying(50) NOT NULL,
//     name character varying(100),
//     description character varying(300),
//     "effectiveStartDate" date,
//     "effectiveEndDate" date,
//     "createdBy" character varying(100) NOT NULL,
//     "createdDate" timestamp without time zone DEFAULT now() NOT NULL,
//     "lastUpdatedBy" character varying(100),
//     "lastUpdatedDate" timestamp without time zone DEFAULT now(),
//     "activeFlag" boolean NOT NULL,
//     "organizationId" uuid
// );


// ALTER TABLE product OWNER TO ${process.env.TYPEORM_USERNAME};

// --
// -- TOC entry 186 (class 1259 OID 49344)
// -- Name: project; Type: TABLE; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// CREATE TABLE project (
//     id uuid DEFAULT uuid_generate_v4() NOT NULL,
//     code character varying(50) NOT NULL,
//     name character varying(100),
//     description character varying(300),
//     "effectiveStartDate" date,
//     "effectiveEndDate" date,
//     "createdBy" character varying(100) NOT NULL,
//     "createdDate" timestamp without time zone DEFAULT now() NOT NULL,
//     "lastUpdatedBy" character varying(100),
//     "lastUpdatedDate" timestamp without time zone DEFAULT now(),
//     "activeFlag" boolean NOT NULL,
//     "organizationId" uuid
// );


// ALTER TABLE project OWNER TO ${process.env.TYPEORM_USERNAME};

// --
// -- TOC entry 193 (class 1259 OID 49413)
// -- Name: transaction_category; Type: TABLE; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// CREATE TABLE transaction_category (
//     id uuid DEFAULT uuid_generate_v4() NOT NULL,
//     name character varying(100) NOT NULL,
//     "effectiveStartDate" date,
//     "effectiveEndDate" date,
//     "createdBy" character varying(100) NOT NULL,
//     "createdDate" timestamp without time zone DEFAULT now() NOT NULL,
//     "lastUpdatedBy" character varying(100),
//     "lastUpdatedDate" timestamp without time zone DEFAULT now(),
//     "activeFlag" boolean NOT NULL,
//     "organizationId" character varying NOT NULL
// );


// ALTER TABLE transaction_category OWNER TO ${process.env.TYPEORM_USERNAME};

// --
// -- TOC entry 198 (class 1259 OID 49534)
// -- Name: transaction_code_temp; Type: TABLE; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// CREATE TABLE transaction_code_temp (
//     id uuid DEFAULT uuid_generate_v4() NOT NULL,
//     sequence character varying(50) NOT NULL,
//     period character varying(50) NOT NULL,
//     type character varying(50) NOT NULL,
//     "createdBy" character varying(100) NOT NULL,
//     "createdDate" timestamp without time zone DEFAULT now() NOT NULL,
//     "lastUpdatedBy" character varying(100),
//     "lastUpdatedDate" timestamp without time zone DEFAULT now(),
//     "activeFlag" boolean NOT NULL
// );


// ALTER TABLE transaction_code_temp OWNER TO ${process.env.TYPEORM_USERNAME};

// --
// -- TOC entry 191 (class 1259 OID 49394)
// -- Name: transaction_parameter; Type: TABLE; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// CREATE TABLE transaction_parameter (
//     id uuid DEFAULT uuid_generate_v4() NOT NULL,
//     template character varying(50) NOT NULL,
//     "descriptionPlaceHolder" character varying(300),
//     "attribute1Title" character varying(100),
//     "attribute1IsMandatory" boolean,
//     "attribute1Type" character varying(100),
//     "attribute1Length" integer,
//     "attribute1IsHeader" boolean,
//     "attribute2Title" character varying(100),
//     "attribute2IsMandatory" boolean,
//     "attribute2Type" character varying(100),
//     "attribute2Length" integer,
//     "attribute2IsHeader" boolean,
//     "attribute3Title" character varying(100),
//     "attribute3IsMandatory" boolean,
//     "attribute3Type" character varying(100),
//     "attribute3Length" integer,
//     "attribute3IsHeader" boolean,
//     "attribute4Title" character varying(100),
//     "attribute4IsMandatory" boolean,
//     "attribute4Type" character varying(100),
//     "attribute4Length" integer,
//     "attribute4IsHeader" boolean,
//     "attribute5Title" character varying(100),
//     "attribute5IsMandatory" boolean,
//     "attribute5Type" character varying(100),
//     "attribute5Length" integer,
//     "attribute5IsHeader" boolean,
//     "attribute6Title" character varying(100),
//     "attribute6IsMandatory" boolean,
//     "attribute6Type" character varying(100),
//     "attribute6Length" integer,
//     "attribute6IsHeader" boolean,
//     "attribute7Title" character varying(100),
//     "attribute7IsMandatory" boolean,
//     "attribute7Type" character varying(100),
//     "attribute7Length" integer,
//     "attribute7IsHeader" boolean,
//     "attribute8Title" character varying(100),
//     "attribute8IsMandatory" boolean,
//     "attribute8Type" character varying(100),
//     "attribute8Length" integer,
//     "attribute8IsHeader" boolean,
//     "attribute9Title" character varying(100),
//     "attribute9IsMandatory" boolean,
//     "attribute9Type" character varying(100),
//     "attribute9Length" integer,
//     "attribute9IsHeader" boolean,
//     "attribute10Title" character varying(100),
//     "attribute10IsMandatory" boolean,
//     "attribute10Type" character varying(100),
//     "attribute10Length" integer,
//     "attribute10IsHeader" boolean,
//     "createdBy" character varying(100) NOT NULL,
//     "createdDate" timestamp without time zone DEFAULT now() NOT NULL,
//     "lastUpdatedBy" character varying(100),
//     "lastUpdatedDate" timestamp without time zone DEFAULT now(),
//     "activeFlag" boolean NOT NULL,
//     "transactioncategoryId" uuid,
//     "transactionsubcategoryId" uuid,
//     "productMandatoryType" character varying(2) NOT NULL,
//     "projectMandatoryType" character varying(2) NOT NULL,
//     "costCenterMandatoryType" character varying(2) NOT NULL,
//     "customerMandatoryType" character varying(2) NOT NULL,
//     "evidenceMandatoryType" character varying(2) NOT NULL
// );


// ALTER TABLE transaction_parameter OWNER TO ${process.env.TYPEORM_USERNAME};

// --
// -- TOC entry 192 (class 1259 OID 49405)
// -- Name: transaction_sub_category; Type: TABLE; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// CREATE TABLE transaction_sub_category (
//     id uuid DEFAULT uuid_generate_v4() NOT NULL,
//     name character varying(100) NOT NULL,
//     "effectiveStartDate" date,
//     "effectiveEndDate" date,
//     "createdBy" character varying(100) NOT NULL,
//     "createdDate" timestamp without time zone DEFAULT now() NOT NULL,
//     "lastUpdatedBy" character varying(100),
//     "lastUpdatedDate" timestamp without time zone DEFAULT now(),
//     "activeFlag" boolean NOT NULL,
//     "transactioncategoryId" uuid
// );


// ALTER TABLE transaction_sub_category OWNER TO ${process.env.TYPEORM_USERNAME};

// --
// -- TOC entry 190 (class 1259 OID 49386)
// -- Name: transaction_type; Type: TABLE; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// CREATE TABLE transaction_type (
//     "transactionTypeId" uuid DEFAULT uuid_generate_v4() NOT NULL,
//     name character varying(100) NOT NULL,
//     "effectiveStartDate" date,
//     "effectiveEndDate" date,
//     "createdBy" character varying(100) NOT NULL,
//     "createdDate" timestamp without time zone DEFAULT now() NOT NULL,
//     "lastUpdatedBy" character varying(100),
//     "lastUpdatedDate" timestamp without time zone DEFAULT now(),
//     "activeFlag" boolean NOT NULL,
//     "transactioncategoryId" uuid,
//     "transactionsubcategoryId" uuid
// );


// ALTER TABLE transaction_type OWNER TO ${process.env.TYPEORM_USERNAME};

// --
// -- TOC entry 201 (class 1259 OID 57471)
// -- Name: transaction_type_account; Type: TABLE; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// CREATE TABLE transaction_type_account (
//     id uuid DEFAULT uuid_generate_v4() NOT NULL,
//     "lineNo" numeric NOT NULL,
//     "accountId" character varying(100) NOT NULL,
//     "percentageDr" numeric(10,4) NOT NULL,
//     "percentageCr" numeric(10,4) NOT NULL,
//     "createdBy" character varying(100) NOT NULL,
//     "createdDate" timestamp without time zone DEFAULT now() NOT NULL,
//     "lastUpdatedBy" character varying(100),
//     "lastUpdatedDate" timestamp without time zone DEFAULT now(),
//     "activeFlag" boolean NOT NULL,
//     organization character varying(2) NOT NULL,
//     product character varying(2) NOT NULL,
//     project character varying(2) NOT NULL,
//     "costCenter" character varying(2) NOT NULL,
//     customer character varying(2) NOT NULL,
//     "attribute1" character varying(2) NOT NULL,
//     "attribute2" character varying(2) NOT NULL,
//     "attribute3" character varying(2) NOT NULL,
//     "attribute4" character varying(2) NOT NULL,
//     "attribute5" character varying(2) NOT NULL,
//     "attribute6" character varying(2) NOT NULL,
//     "attribute7" character varying(2) NOT NULL,
//     "attribute8" character varying(2) NOT NULL,
//     "attribute9" character varying(2) NOT NULL,
//     "attribute10" character varying(2) NOT NULL,
//     "transactionTypeId" uuid
// );


// ALTER TABLE transaction_type_account OWNER TO ${process.env.TYPEORM_USERNAME};

// --
// -- TOC entry 182 (class 1259 OID 49302)
// -- Name: user; Type: TABLE; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// CREATE TABLE "user" (
//     "userName" character varying NOT NULL,
//     "firstName" character varying NOT NULL,
//     "lastName" character varying NOT NULL,
//     password character varying NOT NULL,
//     "isActive" boolean NOT NULL,
//     email character varying NOT NULL,
//     "organizationId" uuid,
//     id uuid DEFAULT uuid_generate_v4() NOT NULL
// );


// ALTER TABLE "user" OWNER TO ${process.env.TYPEORM_USERNAME};

// --
// -- TOC entry 2190 (class 0 OID 83330)
// -- Dependencies: 197
// -- Data for Name: account; Type: TABLE DATA; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// INSERT INTO public.account (id, code, alias, description, "normalBalance", "attribute1Name", "attribute1IsMandatory", "attribute1Type", "attribute1Length", "attribute2Name", "attribute2IsMandatory", "attribute2Type", "attribute2Length", "attribute3Name", "attribute3IsMandatory", "attribute3Type", "attribute3Length", "attribute4Name", "attribute4IsMandatory", "attribute4Type", "attribute4Length", "attribute5Name", "attribute5IsMandatory", "attribute5Type", "attribute5Length", "attribute6Name", "attribute6IsMandatory", "attribute6Type", "attribute6Length", "attribute7Name", "attribute7IsMandatory", "attribute7Type", "attribute7Length", "attribute8Name", "attribute8IsMandatory", "attribute8Type", "attribute8Length", "attribute9Name", "attribute9IsMandatory", "attribute9Type", "attribute9Length", "attribute10Name", "attribute10IsMandatory", "attribute10Type", "attribute10Length", "reference1Name", "reference1IsMandatory", "reference1Type", "reference1Length", "reference2Name", "reference2IsMandatory", "reference2Type", "reference2Length", "reference3Name", "reference3IsMandatory", "reference3Type", "reference3Length", "reference4Name", "reference4IsMandatory", "reference4Type", "reference4Length", "reference5Name", "reference5IsMandatory", "reference5Type", "reference5Length", "reference6Name", "reference6IsMandatory", "reference6Type", "reference6Length", "reference7Name", "reference7IsMandatory", "reference7Type", "reference7Length", "reference8Name", "reference8IsMandatory", "reference8Type", "reference8Length", "reference9Name", "reference9IsMandatory", "reference9Type", "reference9Length", "reference10Name", "reference10IsMandatory", "reference10Type", "reference10Length", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag") VALUES ('95071df5-638b-4b9b-ad63-d3a22fde06b7', '1010101', 'Petty Cash', 'Petty Cash', 1000000000.0000, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Selina', '2019-08-09 11:46:06.181695', NULL, '2019-08-09 11:46:06.181695', true);
// INSERT INTO public.account (id, code, alias, description, "normalBalance", "attribute1Name", "attribute1IsMandatory", "attribute1Type", "attribute1Length", "attribute2Name", "attribute2IsMandatory", "attribute2Type", "attribute2Length", "attribute3Name", "attribute3IsMandatory", "attribute3Type", "attribute3Length", "attribute4Name", "attribute4IsMandatory", "attribute4Type", "attribute4Length", "attribute5Name", "attribute5IsMandatory", "attribute5Type", "attribute5Length", "attribute6Name", "attribute6IsMandatory", "attribute6Type", "attribute6Length", "attribute7Name", "attribute7IsMandatory", "attribute7Type", "attribute7Length", "attribute8Name", "attribute8IsMandatory", "attribute8Type", "attribute8Length", "attribute9Name", "attribute9IsMandatory", "attribute9Type", "attribute9Length", "attribute10Name", "attribute10IsMandatory", "attribute10Type", "attribute10Length", "reference1Name", "reference1IsMandatory", "reference1Type", "reference1Length", "reference2Name", "reference2IsMandatory", "reference2Type", "reference2Length", "reference3Name", "reference3IsMandatory", "reference3Type", "reference3Length", "reference4Name", "reference4IsMandatory", "reference4Type", "reference4Length", "reference5Name", "reference5IsMandatory", "reference5Type", "reference5Length", "reference6Name", "reference6IsMandatory", "reference6Type", "reference6Length", "reference7Name", "reference7IsMandatory", "reference7Type", "reference7Length", "reference8Name", "reference8IsMandatory", "reference8Type", "reference8Length", "reference9Name", "reference9IsMandatory", "reference9Type", "reference9Length", "reference10Name", "reference10IsMandatory", "reference10Type", "reference10Length", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag") VALUES ('4e7e76f4-2a83-47e4-8127-f204deda0e91', '1010102', 'Giro account Bank Mandiri', 'Giro account Bank Mandiri', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Selina', '2019-08-09 11:47:02.100439', NULL, '2019-08-09 11:47:02.100439', true);
// INSERT INTO public.account (id, code, alias, description, "normalBalance", "attribute1Name", "attribute1IsMandatory", "attribute1Type", "attribute1Length", "attribute2Name", "attribute2IsMandatory", "attribute2Type", "attribute2Length", "attribute3Name", "attribute3IsMandatory", "attribute3Type", "attribute3Length", "attribute4Name", "attribute4IsMandatory", "attribute4Type", "attribute4Length", "attribute5Name", "attribute5IsMandatory", "attribute5Type", "attribute5Length", "attribute6Name", "attribute6IsMandatory", "attribute6Type", "attribute6Length", "attribute7Name", "attribute7IsMandatory", "attribute7Type", "attribute7Length", "attribute8Name", "attribute8IsMandatory", "attribute8Type", "attribute8Length", "attribute9Name", "attribute9IsMandatory", "attribute9Type", "attribute9Length", "attribute10Name", "attribute10IsMandatory", "attribute10Type", "attribute10Length", "reference1Name", "reference1IsMandatory", "reference1Type", "reference1Length", "reference2Name", "reference2IsMandatory", "reference2Type", "reference2Length", "reference3Name", "reference3IsMandatory", "reference3Type", "reference3Length", "reference4Name", "reference4IsMandatory", "reference4Type", "reference4Length", "reference5Name", "reference5IsMandatory", "reference5Type", "reference5Length", "reference6Name", "reference6IsMandatory", "reference6Type", "reference6Length", "reference7Name", "reference7IsMandatory", "reference7Type", "reference7Length", "reference8Name", "reference8IsMandatory", "reference8Type", "reference8Length", "reference9Name", "reference9IsMandatory", "reference9Type", "reference9Length", "reference10Name", "reference10IsMandatory", "reference10Type", "reference10Length", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag") VALUES ('9a33a17c-459f-4eb3-b98a-46d766787a22', '1010201', 'Allowance for Doubtfull Account', 'Allowance for Doubtfull Account', NULL, 'Invoice', true, 'number', 10, 'Due Date', false, 'date', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Selina', '2019-08-09 11:58:46.013599', NULL, '2019-08-09 11:58:46.013599', true);
// INSERT INTO public.account (id, code, alias, description, "normalBalance", "attribute1Name", "attribute1IsMandatory", "attribute1Type", "attribute1Length", "attribute2Name", "attribute2IsMandatory", "attribute2Type", "attribute2Length", "attribute3Name", "attribute3IsMandatory", "attribute3Type", "attribute3Length", "attribute4Name", "attribute4IsMandatory", "attribute4Type", "attribute4Length", "attribute5Name", "attribute5IsMandatory", "attribute5Type", "attribute5Length", "attribute6Name", "attribute6IsMandatory", "attribute6Type", "attribute6Length", "attribute7Name", "attribute7IsMandatory", "attribute7Type", "attribute7Length", "attribute8Name", "attribute8IsMandatory", "attribute8Type", "attribute8Length", "attribute9Name", "attribute9IsMandatory", "attribute9Type", "attribute9Length", "attribute10Name", "attribute10IsMandatory", "attribute10Type", "attribute10Length", "reference1Name", "reference1IsMandatory", "reference1Type", "reference1Length", "reference2Name", "reference2IsMandatory", "reference2Type", "reference2Length", "reference3Name", "reference3IsMandatory", "reference3Type", "reference3Length", "reference4Name", "reference4IsMandatory", "reference4Type", "reference4Length", "reference5Name", "reference5IsMandatory", "reference5Type", "reference5Length", "reference6Name", "reference6IsMandatory", "reference6Type", "reference6Length", "reference7Name", "reference7IsMandatory", "reference7Type", "reference7Length", "reference8Name", "reference8IsMandatory", "reference8Type", "reference8Length", "reference9Name", "reference9IsMandatory", "reference9Type", "reference9Length", "reference10Name", "reference10IsMandatory", "reference10Type", "reference10Length", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag") VALUES ('a1a739ab-7ac2-4a3c-b88b-545b0d25e679', '1020300', 'Computer Hardware & Peripheral', 'Computer Hardware & Peripheral', NULL, 'Asset No', true, 'text', 10, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Masa Manfaat', true, 'number', 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Selina', '2019-08-09 11:49:00.859187', NULL, '2019-08-09 11:49:00.859187', true);

// --
// -- TOC entry 2325 (class 0 OID 49364)
// -- Dependencies: 188
// -- Data for Name: accounting_book; Type: TABLE DATA; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --



// --
// -- TOC entry 2333 (class 0 OID 49437)
// -- Dependencies: 196
// -- Data for Name: accounting_period; Type: TABLE DATA; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// INSERT INTO accounting_period (id, code, name, "startDate", "endDate", state, "isAdjusting", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag") VALUES ('0e1b095c-d0ca-4169-9ed4-97c6c654970f', 'AUG-19', 'AGUSTUS 2019', '2019-08-01', '2019-08-31', 'FE', FALSE, 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:19:30.422406', true);
// INSERT INTO accounting_period (id, code, name, "startDate", "endDate", state, "isAdjusting", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag") VALUES ('d13d404e-6c7e-40ef-bdfc-8678298ae1f6', 'SEP-19', 'SEPTEMBER 2019', '2019-09-01', '2019-09-30', 'NO', FALSE, 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:19:30.422406', true);
// INSERT INTO accounting_period (id, code, name, "startDate", "endDate", state, "isAdjusting", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag") VALUES ('8aeac54a-9e40-439d-aaeb-c8554891120a', 'JUL-19', 'JULI 2019', '2019-07-01', '2019-07-31', 'OP', FALSE, 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:19:30.422406', true);

// --
// -- TOC entry 2331 (class 0 OID 49421)
// -- Dependencies: 194
// -- Data for Name: company; Type: TABLE DATA; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// INSERT INTO company (id, code, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag") VALUES ('39696542-6f45-46d5-b777-99d2a3c5bc4f', 'TLKM', 'PT Telekomunikasi Indonesia (Persero) Tbk', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 19:54:59.597165', true);


// --
// -- TOC entry 2320 (class 0 OID 49311)
// -- Dependencies: 183
// -- Data for Name: cost_center; Type: TABLE DATA; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// INSERT INTO cost_center (id, code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('6cd6123e-1d0a-4bd7-97cb-ab974d3ec353', 'DEPT-AA', 'DEPARTMENT AA', 'Cost Center organization AMOEBA-001', '2019-07-19', '9999-12-31', 'Selina', '2019-07-19 00:00:00', NULL, NULL, true, '0e5f2f6e-f3fd-482f-aaff-146bd4aa673d');
// INSERT INTO cost_center (id, code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('4b76ebda-9239-4d09-a8b8-adf47aaec1fb', 'DEPT-A', 'DEPARTMENT A', 'Cost Center organization Arkademy', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '32ae5278-bf84-4c93-9994-0550813844a3');
// INSERT INTO cost_center (id, code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('5e9d8ad4-b89e-4544-bc45-082b8c51ec62', 'DEPT-K', 'DEPARTMENT K', 'Cost Center organization Arkademy', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '241856e3-8a64-4284-8148-c52d2ba0e8dd');
// INSERT INTO cost_center (id, code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('3946aeaa-c43b-4313-8ef7-decf52422390', 'DEPT-AMA', 'DEPARTMENT AMA', 'Cost Center organization Arkademy', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '3338c238-db22-411a-a312-41df704b722f');
// INSERT INTO public.cost_center(
// 	code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId")
// 	VALUES ('000','Default',NULL,'2019-08-19','9999-12-31','Selina','2019-08-19',NULL,NULL,TRUE,'0e5f2f6e-f3fd-482f-aaff-146bd4aa673d');
// INSERT INTO public.cost_center(
// 	code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId")
// 	VALUES ('000','Default',NULL,'2019-08-19','9999-12-31','Selina','2019-08-19',NULL,NULL,TRUE,'32ae5278-bf84-4c93-9994-0550813844a3');
// INSERT INTO public.cost_center(
// 	code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId")
// 	VALUES ('000','Default',NULL,'2019-08-19','9999-12-31','Selina','2019-08-19',NULL,NULL,TRUE,'241856e3-8a64-4284-8148-c52d2ba0e8dd');
// INSERT INTO public.cost_center(
// 	code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId")
// 	VALUES ('000','Default',NULL,'2019-08-19','9999-12-31','Selina','2019-08-19',NULL,NULL,TRUE,'3338c238-db22-411a-a312-41df704b722f');

// --
// -- TOC entry 2334 (class 0 OID 49445)
// -- Dependencies: 197
// -- Data for Name: currency; Type: TABLE DATA; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// INSERT INTO currency (id, code, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag") VALUES ('0df9ecaf-4dca-41d3-abfc-3cc161787fbd', 'IDR', 'Indonesian Rupiah', '2019-07-19', '9999-12-31', 'Selina', '2019-07-19 00:00:00', NULL, NULL, true);
// INSERT INTO currency (id, code, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag") VALUES ('39c5b26d-c9dc-400b-a89f-460e5b97e169', 'USD', 'US Dollar', '2019-07-19', '9999-12-31', 'Selina', '2019-07-19 00:00:00', NULL, NULL, true);
// INSERT INTO currency (id, code, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag") VALUES ('d1b7a974-0645-4c5b-a3ab-0de075fbec25', 'SGD', 'Singapore Dollar', '2019-07-22', '2019-07-26', 'Selina', '2019-07-19 00:00:00', NULL, NULL, true);


// --
// -- TOC entry 2321 (class 0 OID 49322)
// -- Dependencies: 184
// -- Data for Name: customer; Type: TABLE DATA; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// INSERT INTO customer (id, code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('4f4a43e2-13a3-4b87-8e69-72fe31dbd708', 'CUST-AA', 'CUSTOMER AA', 'Customer organization AMOEBA-001', '2019-07-19', '9999-12-31', 'Selina', '2019-07-19 00:00:00', NULL, NULL, true, '0e5f2f6e-f3fd-482f-aaff-146bd4aa673d');
// INSERT INTO customer (id, code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('c0590411-5e5b-42dd-a4f9-0565df05c3ae', 'TLKM', 'TELKOM', 'Customer organization Arkademy', '2019-07-25', '9999-12-31', 'Selina', '2019-07-19 00:00:00', NULL, NULL, true, '32ae5278-bf84-4c93-9994-0550813844a3');
// INSERT INTO customer (id, code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('93e1dd59-fa24-42ba-b077-7375bcacb5a2', 'SSP', 'SSP', 'Customer organization Arkademy', '2019-07-25', '9999-12-31', 'Selina', '2019-07-19 00:00:00', NULL, NULL, true, '32ae5278-bf84-4c93-9994-0550813844a3');
// INSERT INTO customer (id, code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('14796783-a123-446d-8db7-9995b7ec331c', 'PRT', 'PERTAMINA', 'Customer organization Arkademy', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '241856e3-8a64-4284-8148-c52d2ba0e8dd');
// INSERT INTO customer (id, code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('9865dab5-518e-4591-94fd-106c24ca6773', 'UGM', 'UGM', 'Customer organization Big Box', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '241856e3-8a64-4284-8148-c52d2ba0e8dd');
// INSERT INTO customer (id, code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('0d6182d3-93fc-439f-a419-559369a5d858', 'AMA', 'CUSTOMER AMA', 'Customer organization AMA', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '3338c238-db22-411a-a312-41df704b722f');
// INSERT INTO public.customer(
// 	code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId")
// 	VALUES ('000','Default',NULL,'2019-08-19','9999-12-31','Selina','2019-08-19',NULL,NULL,TRUE,'0e5f2f6e-f3fd-482f-aaff-146bd4aa673d');
// INSERT INTO public.customer(
// 	code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId")
// 	VALUES ('000','Default',NULL,'2019-08-19','9999-12-31','Selina','2019-08-19',NULL,NULL,TRUE,'32ae5278-bf84-4c93-9994-0550813844a3');
// INSERT INTO public.customer(
// 	code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId")
// 	VALUES ('000','Default',NULL,'2019-08-19','9999-12-31','Selina','2019-08-19',NULL,NULL,TRUE,'241856e3-8a64-4284-8148-c52d2ba0e8dd');
// INSERT INTO public.customer(
// 	code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId")
// 	VALUES ('000','Default',NULL,'2019-08-19','9999-12-31','Selina','2019-08-19',NULL,NULL,TRUE,'3338c238-db22-411a-a312-41df704b722f');

// --
// -- TOC entry 2332 (class 0 OID 49429)
// -- Dependencies: 195
// -- Data for Name: organization; Type: TABLE DATA; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// INSERT INTO organization (id, code, name, type, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "companyId") VALUES ('3fe6e585-da18-46fc-8ee6-0f976ccaebbc', 'AMB03', 'AMOEBA - 003', 'S', '2019-07-22', '2019-07-26', 'Selina', '2019-07-19 00:00:00', NULL, NULL, true, '39696542-6f45-46d5-b777-99d2a3c5bc4f');
// INSERT INTO organization (id, code, name, type, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "companyId") VALUES ('23127100-1128-4f8a-9163-4c6e1774d405', 'AMB04', 'AMOEBA - 004', 'S', '2019-07-19', '9999-12-31', 'Selina', '2019-07-19 00:00:00', NULL, NULL, false, '39696542-6f45-46d5-b777-99d2a3c5bc4f');
// INSERT INTO organization (id, code, name, type, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "companyId") VALUES ('0ffaefdc-29cd-48c2-ab92-3a5b42a83626', 'AMB05', 'AMOEBA - 005', 'S', '2020-01-01', '9999-12-31', 'Selina', '2019-07-19 00:00:00', NULL, NULL, true, '39696542-6f45-46d5-b777-99d2a3c5bc4f');
// INSERT INTO organization (id, code, name, type, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "companyId") VALUES ('32ae5278-bf84-4c93-9994-0550813844a3', 'ARKDM', 'ARKADEMY', 'S', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '39696542-6f45-46d5-b777-99d2a3c5bc4f');
// INSERT INTO organization (id, code, name, type, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "companyId") VALUES ('3338c238-db22-411a-a312-41df704b722f', 'AMA', 'AMOEBA MANAGEMENT', 'H', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '39696542-6f45-46d5-b777-99d2a3c5bc4f');
// INSERT INTO organization (id, code, name, type, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "companyId") VALUES ('241856e3-8a64-4284-8148-c52d2ba0e8dd', 'BIGBX', 'BIG BOX', 'S', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '39696542-6f45-46d5-b777-99d2a3c5bc4f');
// INSERT INTO organization (id, code, name, type, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "companyId") VALUES ('ea42d078-6066-40d7-9924-7d9d4191c33d', 'KKTK', 'KETITIK', 'S', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '39696542-6f45-46d5-b777-99d2a3c5bc4f');
// INSERT INTO organization (id, code, name, type, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "companyId") VALUES ('030c91f6-0fad-44ed-9a16-043e2934d178', 'JGR', 'JEAGER', 'S', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '39696542-6f45-46d5-b777-99d2a3c5bc4f');
// INSERT INTO organization (id, code, name, type, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "companyId") VALUES ('6d84c268-0cf3-49fb-83d3-b108c0c4b475', 'SMRTY', 'SMARTEYE', 'S', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '39696542-6f45-46d5-b777-99d2a3c5bc4f');
// INSERT INTO organization (id, code, name, type, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "companyId") VALUES ('c5cc83b5-a9c7-4407-a5d1-4c5490d0eed6', 'INCRW', 'I-NECROW', 'S', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '39696542-6f45-46d5-b777-99d2a3c5bc4f');
// INSERT INTO organization (id, code, name, type, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "companyId") VALUES ('40feaceb-9d91-4126-909b-e828021524d5', 'TMPS', 'TOMPS', 'S', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '39696542-6f45-46d5-b777-99d2a3c5bc4f');
// INSERT INTO organization (id, code, name, type, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "companyId") VALUES ('b0219d84-17ca-4c7a-bade-c40477c4e1ca', 'VTR', 'VUTURA', 'S', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '39696542-6f45-46d5-b777-99d2a3c5bc4f');
// INSERT INTO organization (id, code, name, type, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "companyId") VALUES ('57362515-cf34-4df3-848a-cfbf789b41bd', 'GMQO', 'GAMEQOO', 'S', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '39696542-6f45-46d5-b777-99d2a3c5bc4f');
// INSERT INTO organization (id, code, name, type, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "companyId") VALUES ('a5855ab9-eebf-4434-90dd-e52ffb2c1938', 'BGDT', 'BAGIDATA', 'S', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '39696542-6f45-46d5-b777-99d2a3c5bc4f');
// INSERT INTO organization (id, code, name, type, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "companyId") VALUES ('bdcfb394-7f24-405a-91c4-b445c90d6eb9', 'SPRTK', 'SPRINTHINK', 'S', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '39696542-6f45-46d5-b777-99d2a3c5bc4f');
// INSERT INTO organization (id, code, name, type, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "companyId") VALUES ('7f43ce8e-87a0-4305-895a-5fbd5f3a3dc6', 'SNDFR', 'SOUNDFREN', 'S', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '39696542-6f45-46d5-b777-99d2a3c5bc4f');
// INSERT INTO organization (id, code, name, type, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "companyId") VALUES ('bd6263f0-121a-4ab9-b53e-054710364999', 'CPS', 'CPAAS', 'S', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '39696542-6f45-46d5-b777-99d2a3c5bc4f');
// INSERT INTO organization (id, code, name, type, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "companyId") VALUES ('028242a9-542a-4302-baeb-43ae728993d5', 'YLWPG', 'YELLOW PAGES', 'S', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '39696542-6f45-46d5-b777-99d2a3c5bc4f');
// INSERT INTO organization (id, code, name, type, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "companyId") VALUES ('392098a4-f748-4f05-81a8-e050a9d2bf6e', 'BFMNT', 'BLANJA FOR BOS FUNDS MANAGAMENT', 'S', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '39696542-6f45-46d5-b777-99d2a3c5bc4f');
// INSERT INTO organization (id, code, name, type, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "companyId") VALUES ('39d74164-81dc-4dbf-b2a4-ef56eba82a2f', 'BFWRK', 'BLANJA FOR MIGRANT WORKER', 'S', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '39696542-6f45-46d5-b777-99d2a3c5bc4f');
// INSERT INTO organization (id, code, name, type, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "companyId") VALUES ('1946cb0f-b87f-4a15-a06b-f7bdfdb7309e', 'B0GCR', 'BLANJA 020 GROCERIES', 'S', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '39696542-6f45-46d5-b777-99d2a3c5bc4f');
// INSERT INTO organization (id, code, name, type, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "companyId") VALUES ('a420fd31-5004-481f-b5ec-46845b7066b9', 'BS01', 'BAAS', 'S', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '39696542-6f45-46d5-b777-99d2a3c5bc4f');
// INSERT INTO organization (id, code, name, type, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "companyId") VALUES ('9790f70f-5778-4ab6-9b40-c2650a2a3351', 'GPBLS', 'GAME PUBLISHING', 'S', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '39696542-6f45-46d5-b777-99d2a3c5bc4f');
// INSERT INTO organization (id, code, name, type, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "companyId") VALUES ('080ebf91-4a51-46c4-a33f-96e345f04f79', 'MRATM', 'MARKETING AUTOMATION', 'S', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '39696542-6f45-46d5-b777-99d2a3c5bc4f');
// INSERT INTO organization (id, code, name, type, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "companyId") VALUES ('0e5f2f6e-f3fd-482f-aaff-146bd4aa673d', 'AMB01', 'AMOEBA - 001', 'S', '2019-08-19', '9999-12-31', 'Selina', '2019-07-19 00:00:00', NULL, NULL, true, '39696542-6f45-46d5-b777-99d2a3c5bc4f');
// INSERT INTO organization (id, code, name, type, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "companyId") VALUES ('a2f2372b-95c6-4512-a975-4974a6f42b2b', 'AMB02', 'AMOEBA - 002', 'S', '2019-08-19', '9999-12-31', 'Selina', '2019-07-19 00:00:00', NULL, NULL, true, '39696542-6f45-46d5-b777-99d2a3c5bc4f');

// --
// -- TOC entry 2322 (class 0 OID 49333)
// -- Dependencies: 185
// -- Data for Name: product; Type: TABLE DATA; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// INSERT INTO product (id, code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('8dd1af31-c194-4783-9469-6a5724ecff51', 'PROD-AA', 'PRODUCT AA', 'Product organization AMOEBA-001', '2019-07-19', '9999-12-31', 'Selina', '2019-07-19 00:00:00', NULL, NULL, true, '0e5f2f6e-f3fd-482f-aaff-146bd4aa673d');
// INSERT INTO product (id, code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('3679a7a8-9322-49ca-875d-8603b61f703e', 'B2C', 'Modul (B2C)', 'Product organization Arkademy', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '32ae5278-bf84-4c93-9994-0550813844a3');
// INSERT INTO product (id, code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('32fb1dfa-46cf-48a2-92a3-f48c176682d0', 'PRJ', 'Project', 'Product organization Arkademy', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '32ae5278-bf84-4c93-9994-0550813844a3');
// INSERT INTO product (id, code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('23658194-46df-4dcc-8bde-9b68efd4de55', 'B2B', 'Modul B2B', 'Product organization Arkademy', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '32ae5278-bf84-4c93-9994-0550813844a3');
// INSERT INTO product (id, code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('214b91c3-d511-46a7-bf6c-cc6de8fc5902', 'HRG', 'Hiring', 'Product organization Arkademy', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '32ae5278-bf84-4c93-9994-0550813844a3');
// INSERT INTO product (id, code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('1fc33406-9c25-45de-8325-635ad01016cc', 'PSR', 'Profesional Service', 'Product organization Big Box', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '241856e3-8a64-4284-8148-c52d2ba0e8dd');
// INSERT INTO product (id, code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('51e7fd4c-3e8c-4920-bd30-1937dc99e2d0', 'USC', 'Use Case', 'Product organization Big Box', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '241856e3-8a64-4284-8148-c52d2ba0e8dd');
// INSERT INTO product (id, code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('429bd6cc-cf37-45d3-a7a9-09917cd84a79', 'LCS', 'Licese', 'Product organization Big Box', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '241856e3-8a64-4284-8148-c52d2ba0e8dd');
// INSERT INTO product (id, code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('2fbac36d-fc0d-4fae-8700-129e4c73806b', 'HRW', 'Hardware', 'Product organization Big Box', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '241856e3-8a64-4284-8148-c52d2ba0e8dd');
// INSERT INTO product (id, code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('7b2e3ae5-cb78-44d7-a5ba-eab5eedf40e5', 'MRG', 'Margin', 'Product organization Big Box', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '241856e3-8a64-4284-8148-c52d2ba0e8dd');
// INSERT INTO product (id, code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('1e9d511d-c03b-4a5c-9391-8effbd5605e7', 'AMA', 'PRODUCT AMA', 'Product organization AMA', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '3338c238-db22-411a-a312-41df704b722f');
// INSERT INTO product (id, code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('22cbdd75-6ed5-4a29-bbb9-49b291f66677', 'KNS', 'Konsultasi', 'Product organization Ketitik', '2019-07-19', '9999-12-31', 'Selina', '2019-07-19 00:00:00', NULL, NULL, true, 'ea42d078-6066-40d7-9924-7d9d4191c33d');
// INSERT INTO product (id, code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('adb92885-2a1d-4289-a455-13d517057a28', 'CTZ', 'Customization', 'Product organization Ketitik', '2019-07-19', '9999-12-31', 'Selina', '2019-07-19 00:00:00', NULL, NULL, true, 'ea42d078-6066-40d7-9924-7d9d4191c33d');
// INSERT INTO product (id, code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('ab571abc-6c78-4776-9568-a180d3d877a4', 'MNS', 'Manage Service', 'Product organization Ketitik', '2019-07-19', '9999-12-31', 'Selina', '2019-07-19 00:00:00', NULL, NULL, true, 'ea42d078-6066-40d7-9924-7d9d4191c33d');
// INSERT INTO product (id, code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('9f519f4b-5017-46a0-a983-b6630768f5b5', 'MRS', 'Monitoring System', 'Product organization Jeager', '2019-07-19', '9999-12-31', 'Selina', '2019-07-19 00:00:00', NULL, NULL, true, '030c91f6-0fad-44ed-9a16-043e2934d178');
// INSERT INTO product (id, code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('7d2c118c-9eb3-4fda-a88d-e194ee9718b9', 'PYH', 'Penyewaan Hardware', 'Product organization Smarteye', '2019-07-19', '9999-12-31', 'Selina', '2019-07-19 00:00:00', NULL, NULL, true, '6d84c268-0cf3-49fb-83d3-b108c0c4b475');
// INSERT INTO product (id, code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('070992c5-05da-43a4-8991-5318d10f61fe', 'CDC', 'Coding Camp', 'Product organization Smarteye', '2019-07-19', '9999-12-31', 'Selina', '2019-07-19 00:00:00', NULL, NULL, true, '6d84c268-0cf3-49fb-83d3-b108c0c4b475');
// INSERT INTO product (id, code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('21bf19e2-70fc-4fdb-a0e7-7e1878bf0278', 'PJC', 'Penjualan Content', 'Product organization Smarteye', '2019-07-19', '9999-12-31', 'Selina', '2019-07-19 00:00:00', NULL, NULL, true, '6d84c268-0cf3-49fb-83d3-b108c0c4b475');
// INSERT INTO product (id, code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('3faffcfd-11f3-40ed-9828-047083622e75', 'PPM', 'Property Manufactur', 'Product organization Smarteye', '2019-07-19', '9999-12-31', 'Selina', '2019-07-19 00:00:00', NULL, NULL, true, '6d84c268-0cf3-49fb-83d3-b108c0c4b475');
// INSERT INTO product (id, code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('e479f2cd-43c6-415e-8276-30cbf322ffff', 'TRN', 'Training', 'Product organization Smarteye', '2019-07-19', '9999-12-31', 'Selina', '2019-07-19 00:00:00', NULL, NULL, true, '6d84c268-0cf3-49fb-83d3-b108c0c4b475');
// INSERT INTO product (id, code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('a5bba591-293e-4080-abe1-e4ce003c8e8b', 'PRW', 'Pariwisata', 'Product organization Smarteye', '2019-07-19', '9999-12-31', 'Selina', '2019-07-19 00:00:00', NULL, NULL, true, '6d84c268-0cf3-49fb-83d3-b108c0c4b475');
// INSERT INTO product (id, code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('ec9cbec9-716e-4706-9dfc-fd2d76fa0d4b', 'SCP', 'Subscription', 'Product organization Tomps', '2019-07-19', '9999-12-31', 'Selina', '2019-07-19 00:00:00', NULL, NULL, true, '40feaceb-9d91-4126-909b-e828021524d5');
// INSERT INTO product (id, code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('70035694-c839-4f48-9491-9c3ed12c4111', 'SCP', 'Subscription', 'Product organization Vutura', '2019-07-19', '9999-12-31', 'Selina', '2019-07-19 00:00:00', NULL, NULL, true, 'b0219d84-17ca-4c7a-bade-c40477c4e1ca');
// INSERT INTO product (id, code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('23133a7c-3306-4690-9c28-205b9f340fa9', 'MNS', 'Managed Service', 'Product organization Vutura', '2019-07-19', '9999-12-31', 'Selina', '2019-07-19 00:00:00', NULL, NULL, true, 'b0219d84-17ca-4c7a-bade-c40477c4e1ca');
// INSERT INTO product (id, code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('304a3ac9-e39c-4b6e-97fa-27c94171de39', 'PCS', 'PC Subscriber', 'Product organization Gameqoo', '2019-07-19', '9999-12-31', 'Selina', '2019-07-19 00:00:00', NULL, NULL, true, '57362515-cf34-4df3-848a-cfbf789b41bd');
// INSERT INTO product (id, code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('2b152d5c-3306-462a-b89a-48863a3c0449', 'HSG', 'HSI Gamer', 'Product organization Gameqoo', '2019-07-19', '9999-12-31', 'Selina', '2019-07-19 00:00:00', NULL, NULL, true, '57362515-cf34-4df3-848a-cfbf789b41bd');
// INSERT INTO product (id, code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('3ca97f8a-9387-4926-aecb-9bdf4829a6ea', 'PBM', 'Permission Based Marketing', 'Product organization Bagidata', '2019-07-19', '9999-12-31', 'Selina', '2019-07-19 00:00:00', NULL, NULL, true, 'a5855ab9-eebf-4434-90dd-e52ffb2c1938');
// INSERT INTO product (id, code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('0b93452e-af5b-4597-ab86-80e1ed157b8f', 'PRF', 'Profiling', 'Product organization Bagidata', '2019-07-19', '9999-12-31', 'Selina', '2019-07-19 00:00:00', NULL, NULL, true, 'a5855ab9-eebf-4434-90dd-e52ffb2c1938');
// INSERT INTO product (id, code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('bbac0c61-e51e-4919-90c4-3795bd4e7f9c', 'CNL', 'Consultancy', 'Product organization Bagidata', '2019-07-19', '9999-12-31', 'Selina', '2019-07-19 00:00:00', NULL, NULL, true, 'a5855ab9-eebf-4434-90dd-e52ffb2c1938');
// INSERT INTO public.product(
// 	code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId")
// 	VALUES ('000','Default',NULL,'2019-08-19','9999-12-31','Selina','2019-08-19',NULL,NULL,TRUE,'0e5f2f6e-f3fd-482f-aaff-146bd4aa673d');
// INSERT INTO public.product(
// 	code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId")
// 	VALUES ('000','Default',NULL,'2019-08-19','9999-12-31','Selina','2019-08-19',NULL,NULL,TRUE,'32ae5278-bf84-4c93-9994-0550813844a3');
// INSERT INTO public.product(
// 	code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId")
// 	VALUES ('000','Default',NULL,'2019-08-19','9999-12-31','Selina','2019-08-19',NULL,NULL,TRUE,'241856e3-8a64-4284-8148-c52d2ba0e8dd');
// INSERT INTO public.product(
// 	code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId")
// 	VALUES ('000','Default',NULL,'2019-08-19','9999-12-31','Selina','2019-08-19',NULL,NULL,TRUE,'3338c238-db22-411a-a312-41df704b722f');
// INSERT INTO public.product(
// 	code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId")
// 	VALUES ('000','Default',NULL,'2019-08-19','9999-12-31','Selina','2019-08-19',NULL,NULL,TRUE,'ea42d078-6066-40d7-9924-7d9d4191c33d');
// INSERT INTO public.product(
// 	code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId")
// 	VALUES ('000','Default',NULL,'2019-08-19','9999-12-31','Selina','2019-08-19',NULL,NULL,TRUE,'030c91f6-0fad-44ed-9a16-043e2934d178');
// INSERT INTO public.product(
// 	code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId")
// 	VALUES ('000','Default',NULL,'2019-08-19','9999-12-31','Selina','2019-08-19',NULL,NULL,TRUE,'6d84c268-0cf3-49fb-83d3-b108c0c4b475');
// INSERT INTO public.product(
// 	code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId")
// 	VALUES ('000','Default',NULL,'2019-08-19','9999-12-31','Selina','2019-08-19',NULL,NULL,TRUE,'40feaceb-9d91-4126-909b-e828021524d5');
// INSERT INTO public.product(
// 	code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId")
// 	VALUES ('000','Default',NULL,'2019-08-19','9999-12-31','Selina','2019-08-19',NULL,NULL,TRUE,'b0219d84-17ca-4c7a-bade-c40477c4e1ca');
// INSERT INTO public.product(
// 	code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId")
// 	VALUES ('000','Default',NULL,'2019-08-19','9999-12-31','Selina','2019-08-19',NULL,NULL,TRUE,'57362515-cf34-4df3-848a-cfbf789b41bd');
// INSERT INTO public.product(
// 	code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId")
// 	VALUES ('000','Default',NULL,'2019-08-19','9999-12-31','Selina','2019-08-19',NULL,NULL,TRUE,'a5855ab9-eebf-4434-90dd-e52ffb2c1938');


// --
// -- TOC entry 2323 (class 0 OID 49344)
// -- Dependencies: 186
// -- Data for Name: project; Type: TABLE DATA; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// INSERT INTO project (id, code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('2697ac5a-fcff-49a1-9e83-62c5c2df6a8a', 'PROJ-AA', 'PROJECT AA', 'Project organization AMOEBA-001', '2019-07-19', '9999-12-31', 'Selina', '2019-07-19 00:00:00', NULL, NULL, true, '0e5f2f6e-f3fd-482f-aaff-146bd4aa673d');
// INSERT INTO project (id, code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('386b4acd-86f5-4440-b758-eaa008194be3', 'PROJ01', 'PROJECT 01', 'Project organization Arkademy', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '32ae5278-bf84-4c93-9994-0550813844a3');
// INSERT INTO project (id, code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('00ab39ce-1197-44eb-81f4-d1b250c95149', 'PROJ11', 'PROJECT 11', 'Project organization Big Box', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '241856e3-8a64-4284-8148-c52d2ba0e8dd');
// INSERT INTO project (id, code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('48f321ba-f372-480d-86c6-1ed8ea2eaf2b', 'AMA', 'PROJECT AMA', 'Project organization AMA', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '3338c238-db22-411a-a312-41df704b722f');
// INSERT INTO public.project(
// 	code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId")
// 	VALUES ('000','Default',NULL,'2019-08-19','9999-12-31','Selina','2019-08-19',NULL,NULL,TRUE,'0e5f2f6e-f3fd-482f-aaff-146bd4aa673d');
// INSERT INTO public.project(
// 	code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId")
// 	VALUES ('000','Default',NULL,'2019-08-19','9999-12-31','Selina','2019-08-19',NULL,NULL,TRUE,'32ae5278-bf84-4c93-9994-0550813844a3');
// INSERT INTO public.project(
// 	code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId")
// 	VALUES ('000','Default',NULL,'2019-08-19','9999-12-31','Selina','2019-08-19',NULL,NULL,TRUE,'241856e3-8a64-4284-8148-c52d2ba0e8dd');
// INSERT INTO public.project(
// 	code, name, description, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId")
// 	VALUES ('000','Default',NULL,'2019-08-19','9999-12-31','Selina','2019-08-19',NULL,NULL,TRUE,'3338c238-db22-411a-a312-41df704b722f');

// --
// -- TOC entry 2330 (class 0 OID 49413)
// -- Dependencies: 193
// -- Data for Name: transaction_category; Type: TABLE DATA; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// INSERT INTO transaction_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('56e455b0-db4d-4f1e-9e6b-d7064e4459b7', 'CATEGORY - A', '2019-07-19', '9999-12-31', 'Selina', '2019-07-19 00:00:00', NULL, NULL, true, '0e5f2f6e-f3fd-482f-aaff-146bd4aa673d');
// INSERT INTO transaction_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('947eb08a-efd0-402a-9523-bcc37bc142e2', 'CATEGORY - B', '2019-07-19', '9999-12-31', 'Selina', '2019-07-19 00:00:00', NULL, NULL, true, '0e5f2f6e-f3fd-482f-aaff-146bd4aa673d');
// INSERT INTO transaction_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('efbc8fab-00ef-4a9f-ad09-efae6ff265bc', 'CATEGORY - K', '2019-07-19', '9999-12-31', 'Selina', '2019-07-19 00:00:00', NULL, NULL, true, 'a2f2372b-95c6-4512-a975-4974a6f42b2b');
// INSERT INTO transaction_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('0cfc7cbe-0f7f-4067-a4c6-034e052a4976', 'CATEGORY - L', '2019-07-19', '9999-12-31', 'Selina', '2019-07-19 00:00:00', NULL, NULL, true, 'a2f2372b-95c6-4512-a975-4974a6f42b2b');
// INSERT INTO transaction_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('197d49d5-c37c-4418-bbe1-bfaedcd929a4', 'CATEGORY - D', '2019-07-19', '9999-12-31', 'Selina', '2019-07-19 00:00:00', NULL, NULL, false, '0e5f2f6e-f3fd-482f-aaff-146bd4aa673d');
// INSERT INTO transaction_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('42aa5531-6134-4cf7-9b74-6a92ab04d686', 'CATEGORY - E', '2020-01-01', '9999-12-31', 'Selina', '2019-07-19 00:00:00', NULL, NULL, true, '0e5f2f6e-f3fd-482f-aaff-146bd4aa673d');
// INSERT INTO transaction_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('24e2c531-95ac-4fad-bea8-f69033d3d919', 'CATEGORY - C', '2019-07-25', '2019-07-30', 'Selina', '2019-07-19 00:00:00', NULL, NULL, true, '0e5f2f6e-f3fd-482f-aaff-146bd4aa673d');
// INSERT INTO transaction_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('ce6bf152-8f41-486c-afbd-b2d1195466dd', 'CATEGORY AMA', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '3338c238-db22-411a-a312-41df704b722f');
// INSERT INTO transaction_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('7293dfa3-fbb9-4570-8ca0-72fd0c396b30', 'People (Wages)', '2019-07-19', '9999-12-31', 'Selina', '2019-07-19 00:00:00', NULL, NULL, true, '32ae5278-bf84-4c93-9994-0550813844a3');
// INSERT INTO transaction_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('0dbf35b2-bfcb-43c2-a764-babea467615e', 'Biaya Rapat', '2019-08-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '32ae5278-bf84-4c93-9994-0550813844a3');
// INSERT INTO transaction_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('404f8ae3-27e1-458f-95b0-6cb4864af9e7', 'Dana Modal', '2019-08-19', '9999-12-31', 'Selina', '2019-07-19 00:00:00', NULL, NULL, true, '32ae5278-bf84-4c93-9994-0550813844a3');
// INSERT INTO transaction_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('81148bc9-d53d-4c92-a5be-1ca37286fbe7', 'Dana Modal', '2019-08-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '241856e3-8a64-4284-8148-c52d2ba0e8dd');
// INSERT INTO transaction_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('e4e58661-f585-450e-8e8c-b8b1ed4b743f', 'Sewa', '2019-08-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '32ae5278-bf84-4c93-9994-0550813844a3');
// INSERT INTO transaction_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('7e7f7f47-add7-476b-8dc3-f80cb0693c79', 'Marketing', '2019-07-19', '9999-12-31', 'Selina', '2019-07-19 00:00:00', NULL, NULL, true, '32ae5278-bf84-4c93-9994-0550813844a3');
// INSERT INTO transaction_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('abe13a68-f719-4dbd-8c6c-ddb89dd031d8', 'General Affair', '2019-07-19', '9999-12-31', 'Selina', '2019-07-19 00:00:00', NULL, NULL, true, '32ae5278-bf84-4c93-9994-0550813844a3');
// INSERT INTO transaction_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('89252ec9-a9f5-4b3a-895b-ee7250c20a77', 'Product Maintenance', '2019-07-19', '9999-12-31', 'Selina', '2019-07-19 00:00:00', NULL, NULL, true, '32ae5278-bf84-4c93-9994-0550813844a3');
// INSERT INTO transaction_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('65071cde-0ad8-4042-b58a-9e583b3d029e', 'Non-Operating', '2019-07-19', '9999-12-31', 'Selina', '2019-07-19 00:00:00', NULL, NULL, true, '32ae5278-bf84-4c93-9994-0550813844a3');
// INSERT INTO transaction_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('306c20e2-1d45-450d-90e2-a6c005fca7f4', 'Funding', '2019-07-19', '9999-12-31', 'Selina', '2019-07-19 00:00:00', NULL, NULL, true, '32ae5278-bf84-4c93-9994-0550813844a3');
// INSERT INTO transaction_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('c39e2c2c-e689-4dac-b81b-ba3697b487bc', 'Asset Procurement', '2019-07-19', '9999-12-31', 'Selina', '2019-07-19 00:00:00', NULL, NULL, true, '32ae5278-bf84-4c93-9994-0550813844a3');
// INSERT INTO transaction_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('d3a78c99-0e16-4276-8851-7c5e3bdf3fe7', 'Revenue', '2019-07-19', '9999-12-31', 'Selina', '2019-07-19 00:00:00', NULL, NULL, true, '32ae5278-bf84-4c93-9994-0550813844a3');
// INSERT INTO transaction_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('bff18b96-6ba6-41bc-bd10-3a052f1f8d4c', 'Prepaid Cost', '2019-07-19', '9999-12-31', 'Selina', '2019-07-19 00:00:00', NULL, NULL, true, '32ae5278-bf84-4c93-9994-0550813844a3');
// INSERT INTO transaction_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "organizationId") VALUES ('5ac47537-3993-44d3-8861-d49ce2ff6377', 'Project Development Cost', '2019-07-19', '9999-12-31', 'Selina', '2019-07-19 00:00:00', NULL, NULL, true, '32ae5278-bf84-4c93-9994-0550813844a3');

// --
// -- TOC entry 2328 (class 0 OID 49394)
// -- Dependencies: 191
// -- Data for Name: transaction_parameter; Type: TABLE DATA; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// INSERT INTO transaction_parameter (id, template, "descriptionPlaceHolder", "attribute1Title", "attribute1IsMandatory", "attribute1Type", "attribute1Length", "attribute1IsHeader", "attribute2Title", "attribute2IsMandatory", "attribute2Type", "attribute2Length", "attribute2IsHeader", "attribute3Title", "attribute3IsMandatory", "attribute3Type", "attribute3Length", "attribute3IsHeader", "attribute4Title", "attribute4IsMandatory", "attribute4Type", "attribute4Length", "attribute4IsHeader", "attribute5Title", "attribute5IsMandatory", "attribute5Type", "attribute5Length", "attribute5IsHeader", "attribute6Title", "attribute6IsMandatory", "attribute6Type", "attribute6Length", "attribute6IsHeader", "attribute7Title", "attribute7IsMandatory", "attribute7Type", "attribute7Length", "attribute7IsHeader", "attribute8Title", "attribute8IsMandatory", "attribute8Type", "attribute8Length", "attribute8IsHeader", "attribute9Title", "attribute9IsMandatory", "attribute9Type", "attribute9Length", "attribute9IsHeader", "attribute10Title", "attribute10IsMandatory", "attribute10Type", "attribute10Length", "attribute10IsHeader", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId", "productMandatoryType", "projectMandatoryType", "costCenterMandatoryType", "customerMandatoryType", "evidenceMandatoryType") VALUES ('6be57584-314a-4968-8225-7942425feea4', 'CATAA', 'description', 'Invoice', true, 'text', 10, true, 'Due Date', true, 'date', NULL, true, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:57:41.543051', true, '56e455b0-db4d-4f1e-9e6b-d7064e4459b7', '494802de-06d3-4dc1-8b8f-13211e753259', 'MN', 'MN', 'MN', 'MN', 'MN');
// INSERT INTO transaction_parameter (id, template, "descriptionPlaceHolder", "attribute1Title", "attribute1IsMandatory", "attribute1Type", "attribute1Length", "attribute1IsHeader", "attribute2Title", "attribute2IsMandatory", "attribute2Type", "attribute2Length", "attribute2IsHeader", "attribute3Title", "attribute3IsMandatory", "attribute3Type", "attribute3Length", "attribute3IsHeader", "attribute4Title", "attribute4IsMandatory", "attribute4Type", "attribute4Length", "attribute4IsHeader", "attribute5Title", "attribute5IsMandatory", "attribute5Type", "attribute5Length", "attribute5IsHeader", "attribute6Title", "attribute6IsMandatory", "attribute6Type", "attribute6Length", "attribute6IsHeader", "attribute7Title", "attribute7IsMandatory", "attribute7Type", "attribute7Length", "attribute7IsHeader", "attribute8Title", "attribute8IsMandatory", "attribute8Type", "attribute8Length", "attribute8IsHeader", "attribute9Title", "attribute9IsMandatory", "attribute9Type", "attribute9Length", "attribute9IsHeader", "attribute10Title", "attribute10IsMandatory", "attribute10Type", "attribute10Length", "attribute10IsHeader", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId", "productMandatoryType", "projectMandatoryType", "costCenterMandatoryType", "customerMandatoryType", "evidenceMandatoryType") VALUES ('73ade1b1-c63f-4d0a-b30b-2f789f6a897e', 'CATBA', 'description', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '947eb08a-efd0-402a-9523-bcc37bc142e2', 'b86e43a8-4e35-4af1-91d9-09ff08f6bb80', 'DS', 'OP', 'DS', 'OP', 'DS');
// INSERT INTO transaction_parameter (id, template, "descriptionPlaceHolder", "attribute1Title", "attribute1IsMandatory", "attribute1Type", "attribute1Length", "attribute1IsHeader", "attribute2Title", "attribute2IsMandatory", "attribute2Type", "attribute2Length", "attribute2IsHeader", "attribute3Title", "attribute3IsMandatory", "attribute3Type", "attribute3Length", "attribute3IsHeader", "attribute4Title", "attribute4IsMandatory", "attribute4Type", "attribute4Length", "attribute4IsHeader", "attribute5Title", "attribute5IsMandatory", "attribute5Type", "attribute5Length", "attribute5IsHeader", "attribute6Title", "attribute6IsMandatory", "attribute6Type", "attribute6Length", "attribute6IsHeader", "attribute7Title", "attribute7IsMandatory", "attribute7Type", "attribute7Length", "attribute7IsHeader", "attribute8Title", "attribute8IsMandatory", "attribute8Type", "attribute8Length", "attribute8IsHeader", "attribute9Title", "attribute9IsMandatory", "attribute9Type", "attribute9Length", "attribute9IsHeader", "attribute10Title", "attribute10IsMandatory", "attribute10Type", "attribute10Length", "attribute10IsHeader", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId", "productMandatoryType", "projectMandatoryType", "costCenterMandatoryType", "customerMandatoryType", "evidenceMandatoryType") VALUES ('4b76395f-3f4d-4d73-923f-6e59195f62a8', 'COGS', 'description', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '5ac47537-3993-44d3-8861-d49ce2ff6377', '247e4b0b-2abf-4a37-944d-2ac5dc250d98', 'OP', 'DS', 'DS', 'DS', 'MN');
// INSERT INTO transaction_parameter (id, template, "descriptionPlaceHolder", "attribute1Title", "attribute1IsMandatory", "attribute1Type", "attribute1Length", "attribute1IsHeader", "attribute2Title", "attribute2IsMandatory", "attribute2Type", "attribute2Length", "attribute2IsHeader", "attribute3Title", "attribute3IsMandatory", "attribute3Type", "attribute3Length", "attribute3IsHeader", "attribute4Title", "attribute4IsMandatory", "attribute4Type", "attribute4Length", "attribute4IsHeader", "attribute5Title", "attribute5IsMandatory", "attribute5Type", "attribute5Length", "attribute5IsHeader", "attribute6Title", "attribute6IsMandatory", "attribute6Type", "attribute6Length", "attribute6IsHeader", "attribute7Title", "attribute7IsMandatory", "attribute7Type", "attribute7Length", "attribute7IsHeader", "attribute8Title", "attribute8IsMandatory", "attribute8Type", "attribute8Length", "attribute8IsHeader", "attribute9Title", "attribute9IsMandatory", "attribute9Type", "attribute9Length", "attribute9IsHeader", "attribute10Title", "attribute10IsMandatory", "attribute10Type", "attribute10Length", "attribute10IsHeader", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId", "productMandatoryType", "projectMandatoryType", "costCenterMandatoryType", "customerMandatoryType", "evidenceMandatoryType") VALUES ('17bdb326-32fb-4a69-bb69-0accfdd41b8b', 'CATCA', 'description', 'Invoice', false, 'text', 10, true, 'Due Date', false, 'date', NULL, true, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '24e2c531-95ac-4fad-bea8-f69033d3d919', '15ba013b-27bf-44ee-82e1-cce96950b91e', 'OP', 'DS', 'OP', 'DS', 'OP');
// INSERT INTO transaction_parameter (id, template, "descriptionPlaceHolder", "attribute1Title", "attribute1IsMandatory", "attribute1Type", "attribute1Length", "attribute1IsHeader", "attribute2Title", "attribute2IsMandatory", "attribute2Type", "attribute2Length", "attribute2IsHeader", "attribute3Title", "attribute3IsMandatory", "attribute3Type", "attribute3Length", "attribute3IsHeader", "attribute4Title", "attribute4IsMandatory", "attribute4Type", "attribute4Length", "attribute4IsHeader", "attribute5Title", "attribute5IsMandatory", "attribute5Type", "attribute5Length", "attribute5IsHeader", "attribute6Title", "attribute6IsMandatory", "attribute6Type", "attribute6Length", "attribute6IsHeader", "attribute7Title", "attribute7IsMandatory", "attribute7Type", "attribute7Length", "attribute7IsHeader", "attribute8Title", "attribute8IsMandatory", "attribute8Type", "attribute8Length", "attribute8IsHeader", "attribute9Title", "attribute9IsMandatory", "attribute9Type", "attribute9Length", "attribute9IsHeader", "attribute10Title", "attribute10IsMandatory", "attribute10Type", "attribute10Length", "attribute10IsHeader", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId", "productMandatoryType", "projectMandatoryType", "costCenterMandatoryType", "customerMandatoryType", "evidenceMandatoryType") VALUES ('0fdfef7b-47dc-4d70-9c4f-54b7917c0311', 'CATCA', 'description', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '24e2c531-95ac-4fad-bea8-f69033d3d919', '15ba013b-27bf-44ee-82e1-cce96950b91e', 'MN', 'OP', 'DS', 'OP', 'MN');
// INSERT INTO transaction_parameter (id, template, "descriptionPlaceHolder", "attribute1Title", "attribute1IsMandatory", "attribute1Type", "attribute1Length", "attribute1IsHeader", "attribute2Title", "attribute2IsMandatory", "attribute2Type", "attribute2Length", "attribute2IsHeader", "attribute3Title", "attribute3IsMandatory", "attribute3Type", "attribute3Length", "attribute3IsHeader", "attribute4Title", "attribute4IsMandatory", "attribute4Type", "attribute4Length", "attribute4IsHeader", "attribute5Title", "attribute5IsMandatory", "attribute5Type", "attribute5Length", "attribute5IsHeader", "attribute6Title", "attribute6IsMandatory", "attribute6Type", "attribute6Length", "attribute6IsHeader", "attribute7Title", "attribute7IsMandatory", "attribute7Type", "attribute7Length", "attribute7IsHeader", "attribute8Title", "attribute8IsMandatory", "attribute8Type", "attribute8Length", "attribute8IsHeader", "attribute9Title", "attribute9IsMandatory", "attribute9Type", "attribute9Length", "attribute9IsHeader", "attribute10Title", "attribute10IsMandatory", "attribute10Type", "attribute10Length", "attribute10IsHeader", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId", "productMandatoryType", "projectMandatoryType", "costCenterMandatoryType", "customerMandatoryType", "evidenceMandatoryType") VALUES ('f285fe90-d517-456b-a965-bc47397e101a', 'CATBB', 'description', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '947eb08a-efd0-402a-9523-bcc37bc142e2', 'f3802f42-e1ce-473d-bb4d-0572e7f6a90c', 'OP', 'OP', 'OP', 'OP', 'MN');
// INSERT INTO transaction_parameter (id, template, "descriptionPlaceHolder", "attribute1Title", "attribute1IsMandatory", "attribute1Type", "attribute1Length", "attribute1IsHeader", "attribute2Title", "attribute2IsMandatory", "attribute2Type", "attribute2Length", "attribute2IsHeader", "attribute3Title", "attribute3IsMandatory", "attribute3Type", "attribute3Length", "attribute3IsHeader", "attribute4Title", "attribute4IsMandatory", "attribute4Type", "attribute4Length", "attribute4IsHeader", "attribute5Title", "attribute5IsMandatory", "attribute5Type", "attribute5Length", "attribute5IsHeader", "attribute6Title", "attribute6IsMandatory", "attribute6Type", "attribute6Length", "attribute6IsHeader", "attribute7Title", "attribute7IsMandatory", "attribute7Type", "attribute7Length", "attribute7IsHeader", "attribute8Title", "attribute8IsMandatory", "attribute8Type", "attribute8Length", "attribute8IsHeader", "attribute9Title", "attribute9IsMandatory", "attribute9Type", "attribute9Length", "attribute9IsHeader", "attribute10Title", "attribute10IsMandatory", "attribute10Type", "attribute10Length", "attribute10IsHeader", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId", "productMandatoryType", "projectMandatoryType", "costCenterMandatoryType", "customerMandatoryType", "evidenceMandatoryType") VALUES ('4da7bedb-3086-4748-bfba-97d6055f3423', 'RECEIV', 'description', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '404f8ae3-27e1-458f-95b0-6cb4864af9e7', '692a26f8-5a02-4b8c-9852-ddac2cd0634c', 'OP', 'OP', 'OP', 'OP', 'OP');
// INSERT INTO transaction_parameter (id, template, "descriptionPlaceHolder", "attribute1Title", "attribute1IsMandatory", "attribute1Type", "attribute1Length", "attribute1IsHeader", "attribute2Title", "attribute2IsMandatory", "attribute2Type", "attribute2Length", "attribute2IsHeader", "attribute3Title", "attribute3IsMandatory", "attribute3Type", "attribute3Length", "attribute3IsHeader", "attribute4Title", "attribute4IsMandatory", "attribute4Type", "attribute4Length", "attribute4IsHeader", "attribute5Title", "attribute5IsMandatory", "attribute5Type", "attribute5Length", "attribute5IsHeader", "attribute6Title", "attribute6IsMandatory", "attribute6Type", "attribute6Length", "attribute6IsHeader", "attribute7Title", "attribute7IsMandatory", "attribute7Type", "attribute7Length", "attribute7IsHeader", "attribute8Title", "attribute8IsMandatory", "attribute8Type", "attribute8Length", "attribute8IsHeader", "attribute9Title", "attribute9IsMandatory", "attribute9Type", "attribute9Length", "attribute9IsHeader", "attribute10Title", "attribute10IsMandatory", "attribute10Type", "attribute10Length", "attribute10IsHeader", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId", "productMandatoryType", "projectMandatoryType", "costCenterMandatoryType", "customerMandatoryType", "evidenceMandatoryType") VALUES ('5292dda2-2d92-46f0-83cd-4921cabd0e59', 'RECEIV', 'description', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '404f8ae3-27e1-458f-95b0-6cb4864af9e7', 'ac75bc13-c5bf-4f3c-88cc-b90b67d74669', 'OP', 'OP', 'OP', 'OP', 'OP');
// INSERT INTO transaction_parameter (id, template, "descriptionPlaceHolder", "attribute1Title", "attribute1IsMandatory", "attribute1Type", "attribute1Length", "attribute1IsHeader", "attribute2Title", "attribute2IsMandatory", "attribute2Type", "attribute2Length", "attribute2IsHeader", "attribute3Title", "attribute3IsMandatory", "attribute3Type", "attribute3Length", "attribute3IsHeader", "attribute4Title", "attribute4IsMandatory", "attribute4Type", "attribute4Length", "attribute4IsHeader", "attribute5Title", "attribute5IsMandatory", "attribute5Type", "attribute5Length", "attribute5IsHeader", "attribute6Title", "attribute6IsMandatory", "attribute6Type", "attribute6Length", "attribute6IsHeader", "attribute7Title", "attribute7IsMandatory", "attribute7Type", "attribute7Length", "attribute7IsHeader", "attribute8Title", "attribute8IsMandatory", "attribute8Type", "attribute8Length", "attribute8IsHeader", "attribute9Title", "attribute9IsMandatory", "attribute9Type", "attribute9Length", "attribute9IsHeader", "attribute10Title", "attribute10IsMandatory", "attribute10Type", "attribute10Length", "attribute10IsHeader", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId", "productMandatoryType", "projectMandatoryType", "costCenterMandatoryType", "customerMandatoryType", "evidenceMandatoryType") VALUES ('c1daabc1-2e6a-4506-8c9c-24620645a972', 'RECEIV', 'description', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '404f8ae3-27e1-458f-95b0-6cb4864af9e7', '6a0a52c4-37e2-415d-aa3b-92814f2e92e3', 'OP', 'OP', 'OP', 'OP', 'OP');
// INSERT INTO transaction_parameter (id, template, "descriptionPlaceHolder", "attribute1Title", "attribute1IsMandatory", "attribute1Type", "attribute1Length", "attribute1IsHeader", "attribute2Title", "attribute2IsMandatory", "attribute2Type", "attribute2Length", "attribute2IsHeader", "attribute3Title", "attribute3IsMandatory", "attribute3Type", "attribute3Length", "attribute3IsHeader", "attribute4Title", "attribute4IsMandatory", "attribute4Type", "attribute4Length", "attribute4IsHeader", "attribute5Title", "attribute5IsMandatory", "attribute5Type", "attribute5Length", "attribute5IsHeader", "attribute6Title", "attribute6IsMandatory", "attribute6Type", "attribute6Length", "attribute6IsHeader", "attribute7Title", "attribute7IsMandatory", "attribute7Type", "attribute7Length", "attribute7IsHeader", "attribute8Title", "attribute8IsMandatory", "attribute8Type", "attribute8Length", "attribute8IsHeader", "attribute9Title", "attribute9IsMandatory", "attribute9Type", "attribute9Length", "attribute9IsHeader", "attribute10Title", "attribute10IsMandatory", "attribute10Type", "attribute10Length", "attribute10IsHeader", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId", "productMandatoryType", "projectMandatoryType", "costCenterMandatoryType", "customerMandatoryType", "evidenceMandatoryType") VALUES ('989cc627-73f9-418e-9946-b27c3eeeefad', 'REVAL', 'description', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '0dbf35b2-bfcb-43c2-a764-babea467615e', '1c92113e-0d0d-4068-b330-279c82653f0f', 'OP', 'OP', 'OP', 'OP', 'OP');
// INSERT INTO transaction_parameter (id, template, "descriptionPlaceHolder", "attribute1Title", "attribute1IsMandatory", "attribute1Type", "attribute1Length", "attribute1IsHeader", "attribute2Title", "attribute2IsMandatory", "attribute2Type", "attribute2Length", "attribute2IsHeader", "attribute3Title", "attribute3IsMandatory", "attribute3Type", "attribute3Length", "attribute3IsHeader", "attribute4Title", "attribute4IsMandatory", "attribute4Type", "attribute4Length", "attribute4IsHeader", "attribute5Title", "attribute5IsMandatory", "attribute5Type", "attribute5Length", "attribute5IsHeader", "attribute6Title", "attribute6IsMandatory", "attribute6Type", "attribute6Length", "attribute6IsHeader", "attribute7Title", "attribute7IsMandatory", "attribute7Type", "attribute7Length", "attribute7IsHeader", "attribute8Title", "attribute8IsMandatory", "attribute8Type", "attribute8Length", "attribute8IsHeader", "attribute9Title", "attribute9IsMandatory", "attribute9Type", "attribute9Length", "attribute9IsHeader", "attribute10Title", "attribute10IsMandatory", "attribute10Type", "attribute10Length", "attribute10IsHeader", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId", "productMandatoryType", "projectMandatoryType", "costCenterMandatoryType", "customerMandatoryType", "evidenceMandatoryType") VALUES ('33e4dba3-70f4-4826-822b-6bc7928efa53', 'REVAL', 'description', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '0dbf35b2-bfcb-43c2-a764-babea467615e', '8a52b988-de9a-4e46-b24a-8179f9c424f8', 'OP', 'OP', 'OP', 'OP', 'OP');
// INSERT INTO transaction_parameter (id, template, "descriptionPlaceHolder", "attribute1Title", "attribute1IsMandatory", "attribute1Type", "attribute1Length", "attribute1IsHeader", "attribute2Title", "attribute2IsMandatory", "attribute2Type", "attribute2Length", "attribute2IsHeader", "attribute3Title", "attribute3IsMandatory", "attribute3Type", "attribute3Length", "attribute3IsHeader", "attribute4Title", "attribute4IsMandatory", "attribute4Type", "attribute4Length", "attribute4IsHeader", "attribute5Title", "attribute5IsMandatory", "attribute5Type", "attribute5Length", "attribute5IsHeader", "attribute6Title", "attribute6IsMandatory", "attribute6Type", "attribute6Length", "attribute6IsHeader", "attribute7Title", "attribute7IsMandatory", "attribute7Type", "attribute7Length", "attribute7IsHeader", "attribute8Title", "attribute8IsMandatory", "attribute8Type", "attribute8Length", "attribute8IsHeader", "attribute9Title", "attribute9IsMandatory", "attribute9Type", "attribute9Length", "attribute9IsHeader", "attribute10Title", "attribute10IsMandatory", "attribute10Type", "attribute10Length", "attribute10IsHeader", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId", "productMandatoryType", "projectMandatoryType", "costCenterMandatoryType", "customerMandatoryType", "evidenceMandatoryType") VALUES ('1ab490da-9567-44a7-8b17-fa6f00525354', 'GAWOS', 'description', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, 'e4e58661-f585-450e-8e8c-b8b1ed4b743f', 'b8941b03-ccb9-4cb4-acb9-aad03b1f828d', 'OP', 'OP', 'OP', 'OP', 'OP');
// INSERT INTO transaction_parameter (id, template, "descriptionPlaceHolder", "attribute1Title", "attribute1IsMandatory", "attribute1Type", "attribute1Length", "attribute1IsHeader", "attribute2Title", "attribute2IsMandatory", "attribute2Type", "attribute2Length", "attribute2IsHeader", "attribute3Title", "attribute3IsMandatory", "attribute3Type", "attribute3Length", "attribute3IsHeader", "attribute4Title", "attribute4IsMandatory", "attribute4Type", "attribute4Length", "attribute4IsHeader", "attribute5Title", "attribute5IsMandatory", "attribute5Type", "attribute5Length", "attribute5IsHeader", "attribute6Title", "attribute6IsMandatory", "attribute6Type", "attribute6Length", "attribute6IsHeader", "attribute7Title", "attribute7IsMandatory", "attribute7Type", "attribute7Length", "attribute7IsHeader", "attribute8Title", "attribute8IsMandatory", "attribute8Type", "attribute8Length", "attribute8IsHeader", "attribute9Title", "attribute9IsMandatory", "attribute9Type", "attribute9Length", "attribute9IsHeader", "attribute10Title", "attribute10IsMandatory", "attribute10Type", "attribute10Length", "attribute10IsHeader", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId", "productMandatoryType", "projectMandatoryType", "costCenterMandatoryType", "customerMandatoryType", "evidenceMandatoryType") VALUES ('947d8d47-6542-499f-b64e-2446a7ca534a', 'RECEIV', 'description', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '81148bc9-d53d-4c92-a5be-1ca37286fbe7', '10148e2d-88dd-4633-9d11-aa605d48dc7b', 'OP', 'OP', 'OP', 'OP', 'OP');
// INSERT INTO transaction_parameter (id, template, "descriptionPlaceHolder", "attribute1Title", "attribute1IsMandatory", "attribute1Type", "attribute1Length", "attribute1IsHeader", "attribute2Title", "attribute2IsMandatory", "attribute2Type", "attribute2Length", "attribute2IsHeader", "attribute3Title", "attribute3IsMandatory", "attribute3Type", "attribute3Length", "attribute3IsHeader", "attribute4Title", "attribute4IsMandatory", "attribute4Type", "attribute4Length", "attribute4IsHeader", "attribute5Title", "attribute5IsMandatory", "attribute5Type", "attribute5Length", "attribute5IsHeader", "attribute6Title", "attribute6IsMandatory", "attribute6Type", "attribute6Length", "attribute6IsHeader", "attribute7Title", "attribute7IsMandatory", "attribute7Type", "attribute7Length", "attribute7IsHeader", "attribute8Title", "attribute8IsMandatory", "attribute8Type", "attribute8Length", "attribute8IsHeader", "attribute9Title", "attribute9IsMandatory", "attribute9Type", "attribute9Length", "attribute9IsHeader", "attribute10Title", "attribute10IsMandatory", "attribute10Type", "attribute10Length", "attribute10IsHeader", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId", "productMandatoryType", "projectMandatoryType", "costCenterMandatoryType", "customerMandatoryType", "evidenceMandatoryType") VALUES ('f7caaf2e-a778-4923-a150-d549511af132', 'RECEIV', 'description', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '81148bc9-d53d-4c92-a5be-1ca37286fbe7', '546b0015-ef53-4d34-ada5-369d8a28c7ab', 'OP', 'OP', 'OP', 'OP', 'OP');
// INSERT INTO transaction_parameter (id, template, "descriptionPlaceHolder", "attribute1Title", "attribute1IsMandatory", "attribute1Type", "attribute1Length", "attribute1IsHeader", "attribute2Title", "attribute2IsMandatory", "attribute2Type", "attribute2Length", "attribute2IsHeader", "attribute3Title", "attribute3IsMandatory", "attribute3Type", "attribute3Length", "attribute3IsHeader", "attribute4Title", "attribute4IsMandatory", "attribute4Type", "attribute4Length", "attribute4IsHeader", "attribute5Title", "attribute5IsMandatory", "attribute5Type", "attribute5Length", "attribute5IsHeader", "attribute6Title", "attribute6IsMandatory", "attribute6Type", "attribute6Length", "attribute6IsHeader", "attribute7Title", "attribute7IsMandatory", "attribute7Type", "attribute7Length", "attribute7IsHeader", "attribute8Title", "attribute8IsMandatory", "attribute8Type", "attribute8Length", "attribute8IsHeader", "attribute9Title", "attribute9IsMandatory", "attribute9Type", "attribute9Length", "attribute9IsHeader", "attribute10Title", "attribute10IsMandatory", "attribute10Type", "attribute10Length", "attribute10IsHeader", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId", "productMandatoryType", "projectMandatoryType", "costCenterMandatoryType", "customerMandatoryType", "evidenceMandatoryType") VALUES ('a536107b-3d51-491d-a12c-8d3553048b8a', 'RECEIV', 'description', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '81148bc9-d53d-4c92-a5be-1ca37286fbe7', '5f7d8ffb-e5bc-4166-8cf3-98208df0b197', 'OP', 'OP', 'OP', 'OP', 'OP');
// INSERT INTO transaction_parameter (id, template, "descriptionPlaceHolder", "attribute1Title", "attribute1IsMandatory", "attribute1Type", "attribute1Length", "attribute1IsHeader", "attribute2Title", "attribute2IsMandatory", "attribute2Type", "attribute2Length", "attribute2IsHeader", "attribute3Title", "attribute3IsMandatory", "attribute3Type", "attribute3Length", "attribute3IsHeader", "attribute4Title", "attribute4IsMandatory", "attribute4Type", "attribute4Length", "attribute4IsHeader", "attribute5Title", "attribute5IsMandatory", "attribute5Type", "attribute5Length", "attribute5IsHeader", "attribute6Title", "attribute6IsMandatory", "attribute6Type", "attribute6Length", "attribute6IsHeader", "attribute7Title", "attribute7IsMandatory", "attribute7Type", "attribute7Length", "attribute7IsHeader", "attribute8Title", "attribute8IsMandatory", "attribute8Type", "attribute8Length", "attribute8IsHeader", "attribute9Title", "attribute9IsMandatory", "attribute9Type", "attribute9Length", "attribute9IsHeader", "attribute10Title", "attribute10IsMandatory", "attribute10Type", "attribute10Length", "attribute10IsHeader", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId", "productMandatoryType", "projectMandatoryType", "costCenterMandatoryType", "customerMandatoryType", "evidenceMandatoryType") VALUES ('400394a5-6a35-4b62-a647-f6e237238e7f', 'COGS', 'description', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, 'ce6bf152-8f41-486c-afbd-b2d1195466dd', '5acb31b5-a3c4-4e67-8623-0e9ea804a4a1', 'OP', 'OP', 'OP', 'OP', 'OP');
// INSERT INTO transaction_parameter (id, template, "descriptionPlaceHolder", "attribute1Title", "attribute1IsMandatory", "attribute1Type", "attribute1Length", "attribute1IsHeader", "attribute2Title", "attribute2IsMandatory", "attribute2Type", "attribute2Length", "attribute2IsHeader", "attribute3Title", "attribute3IsMandatory", "attribute3Type", "attribute3Length", "attribute3IsHeader", "attribute4Title", "attribute4IsMandatory", "attribute4Type", "attribute4Length", "attribute4IsHeader", "attribute5Title", "attribute5IsMandatory", "attribute5Type", "attribute5Length", "attribute5IsHeader", "attribute6Title", "attribute6IsMandatory", "attribute6Type", "attribute6Length", "attribute6IsHeader", "attribute7Title", "attribute7IsMandatory", "attribute7Type", "attribute7Length", "attribute7IsHeader", "attribute8Title", "attribute8IsMandatory", "attribute8Type", "attribute8Length", "attribute8IsHeader", "attribute9Title", "attribute9IsMandatory", "attribute9Type", "attribute9Length", "attribute9IsHeader", "attribute10Title", "attribute10IsMandatory", "attribute10Type", "attribute10Length", "attribute10IsHeader", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId", "productMandatoryType", "projectMandatoryType", "costCenterMandatoryType", "customerMandatoryType", "evidenceMandatoryType") VALUES ('cc8b6f17-8c8f-40d8-b2e2-e1b213635526', 'RECEIV', 'description', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '404f8ae3-27e1-458f-95b0-6cb4864af9e7', '3da4d2c6-4dc8-4d29-97e6-206cc5faba4c', 'MN', 'DS', 'DS', 'DS', 'OP');
// INSERT INTO transaction_parameter (id, template, "descriptionPlaceHolder", "attribute1Title", "attribute1IsMandatory", "attribute1Type", "attribute1Length", "attribute1IsHeader", "attribute2Title", "attribute2IsMandatory", "attribute2Type", "attribute2Length", "attribute2IsHeader", "attribute3Title", "attribute3IsMandatory", "attribute3Type", "attribute3Length", "attribute3IsHeader", "attribute4Title", "attribute4IsMandatory", "attribute4Type", "attribute4Length", "attribute4IsHeader", "attribute5Title", "attribute5IsMandatory", "attribute5Type", "attribute5Length", "attribute5IsHeader", "attribute6Title", "attribute6IsMandatory", "attribute6Type", "attribute6Length", "attribute6IsHeader", "attribute7Title", "attribute7IsMandatory", "attribute7Type", "attribute7Length", "attribute7IsHeader", "attribute8Title", "attribute8IsMandatory", "attribute8Type", "attribute8Length", "attribute8IsHeader", "attribute9Title", "attribute9IsMandatory", "attribute9Type", "attribute9Length", "attribute9IsHeader", "attribute10Title", "attribute10IsMandatory", "attribute10Type", "attribute10Length", "attribute10IsHeader", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId", "productMandatoryType", "projectMandatoryType", "costCenterMandatoryType", "customerMandatoryType", "evidenceMandatoryType") VALUES ('4b4c9743-a2ac-47cf-8bcb-fc698228c871', 'PEOFE', 'description', 'Counterparty', true, 'Text', 50, true, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '7293dfa3-fbb9-4570-8ca0-72fd0c396b30', 'f39858df-001d-44cc-95d7-88c6a27b1019', 'OP', 'DS', 'DS', 'DS', 'MN');
// INSERT INTO transaction_parameter (id, template, "descriptionPlaceHolder", "attribute1Title", "attribute1IsMandatory", "attribute1Type", "attribute1Length", "attribute1IsHeader", "attribute2Title", "attribute2IsMandatory", "attribute2Type", "attribute2Length", "attribute2IsHeader", "attribute3Title", "attribute3IsMandatory", "attribute3Type", "attribute3Length", "attribute3IsHeader", "attribute4Title", "attribute4IsMandatory", "attribute4Type", "attribute4Length", "attribute4IsHeader", "attribute5Title", "attribute5IsMandatory", "attribute5Type", "attribute5Length", "attribute5IsHeader", "attribute6Title", "attribute6IsMandatory", "attribute6Type", "attribute6Length", "attribute6IsHeader", "attribute7Title", "attribute7IsMandatory", "attribute7Type", "attribute7Length", "attribute7IsHeader", "attribute8Title", "attribute8IsMandatory", "attribute8Type", "attribute8Length", "attribute8IsHeader", "attribute9Title", "attribute9IsMandatory", "attribute9Type", "attribute9Length", "attribute9IsHeader", "attribute10Title", "attribute10IsMandatory", "attribute10Type", "attribute10Length", "attribute10IsHeader", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId", "productMandatoryType", "projectMandatoryType", "costCenterMandatoryType", "customerMandatoryType", "evidenceMandatoryType") VALUES ('b5c3880a-496e-4ec6-8ae3-6560539e63c0', 'PEONE', 'description', 'Counterparty', true, 'Text', 50, true, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '7293dfa3-fbb9-4570-8ca0-72fd0c396b30', '71b58ce7-d8d0-40ca-9bd4-863e81b938c9', 'OP', 'DS', 'DS', 'DS', 'MN');
// INSERT INTO transaction_parameter (id, template, "descriptionPlaceHolder", "attribute1Title", "attribute1IsMandatory", "attribute1Type", "attribute1Length", "attribute1IsHeader", "attribute2Title", "attribute2IsMandatory", "attribute2Type", "attribute2Length", "attribute2IsHeader", "attribute3Title", "attribute3IsMandatory", "attribute3Type", "attribute3Length", "attribute3IsHeader", "attribute4Title", "attribute4IsMandatory", "attribute4Type", "attribute4Length", "attribute4IsHeader", "attribute5Title", "attribute5IsMandatory", "attribute5Type", "attribute5Length", "attribute5IsHeader", "attribute6Title", "attribute6IsMandatory", "attribute6Type", "attribute6Length", "attribute6IsHeader", "attribute7Title", "attribute7IsMandatory", "attribute7Type", "attribute7Length", "attribute7IsHeader", "attribute8Title", "attribute8IsMandatory", "attribute8Type", "attribute8Length", "attribute8IsHeader", "attribute9Title", "attribute9IsMandatory", "attribute9Type", "attribute9Length", "attribute9IsHeader", "attribute10Title", "attribute10IsMandatory", "attribute10Type", "attribute10Length", "attribute10IsHeader", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId", "productMandatoryType", "projectMandatoryType", "costCenterMandatoryType", "customerMandatoryType", "evidenceMandatoryType") VALUES ('e3bd5f8c-2017-48b1-a9a3-80134e048ff4', 'PEONO', 'description', 'Counterparty', true, 'Text', 50, true, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '7293dfa3-fbb9-4570-8ca0-72fd0c396b30', '12abe2ae-cf02-4001-9d5e-19780740c452', 'OP', 'DS', 'DS', 'DS', 'MN');
// INSERT INTO transaction_parameter (id, template, "descriptionPlaceHolder", "attribute1Title", "attribute1IsMandatory", "attribute1Type", "attribute1Length", "attribute1IsHeader", "attribute2Title", "attribute2IsMandatory", "attribute2Type", "attribute2Length", "attribute2IsHeader", "attribute3Title", "attribute3IsMandatory", "attribute3Type", "attribute3Length", "attribute3IsHeader", "attribute4Title", "attribute4IsMandatory", "attribute4Type", "attribute4Length", "attribute4IsHeader", "attribute5Title", "attribute5IsMandatory", "attribute5Type", "attribute5Length", "attribute5IsHeader", "attribute6Title", "attribute6IsMandatory", "attribute6Type", "attribute6Length", "attribute6IsHeader", "attribute7Title", "attribute7IsMandatory", "attribute7Type", "attribute7Length", "attribute7IsHeader", "attribute8Title", "attribute8IsMandatory", "attribute8Type", "attribute8Length", "attribute8IsHeader", "attribute9Title", "attribute9IsMandatory", "attribute9Type", "attribute9Length", "attribute9IsHeader", "attribute10Title", "attribute10IsMandatory", "attribute10Type", "attribute10Length", "attribute10IsHeader", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId", "productMandatoryType", "projectMandatoryType", "costCenterMandatoryType", "customerMandatoryType", "evidenceMandatoryType") VALUES ('820d4ec4-c035-4d96-bc95-e4d0a2ab4302', 'PEOTH', 'description', 'Counterparty', true, 'Text', 50, true, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '7293dfa3-fbb9-4570-8ca0-72fd0c396b30', '26381404-e728-46f9-8acd-f7af1d22a5d4', 'OP', 'DS', 'DS', 'DS', 'MN');
// INSERT INTO transaction_parameter (id, template, "descriptionPlaceHolder", "attribute1Title", "attribute1IsMandatory", "attribute1Type", "attribute1Length", "attribute1IsHeader", "attribute2Title", "attribute2IsMandatory", "attribute2Type", "attribute2Length", "attribute2IsHeader", "attribute3Title", "attribute3IsMandatory", "attribute3Type", "attribute3Length", "attribute3IsHeader", "attribute4Title", "attribute4IsMandatory", "attribute4Type", "attribute4Length", "attribute4IsHeader", "attribute5Title", "attribute5IsMandatory", "attribute5Type", "attribute5Length", "attribute5IsHeader", "attribute6Title", "attribute6IsMandatory", "attribute6Type", "attribute6Length", "attribute6IsHeader", "attribute7Title", "attribute7IsMandatory", "attribute7Type", "attribute7Length", "attribute7IsHeader", "attribute8Title", "attribute8IsMandatory", "attribute8Type", "attribute8Length", "attribute8IsHeader", "attribute9Title", "attribute9IsMandatory", "attribute9Type", "attribute9Length", "attribute9IsHeader", "attribute10Title", "attribute10IsMandatory", "attribute10Type", "attribute10Length", "attribute10IsHeader", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId", "productMandatoryType", "projectMandatoryType", "costCenterMandatoryType", "customerMandatoryType", "evidenceMandatoryType") VALUES ('e0d14cb5-3d0a-437a-8426-a887c5b8630f', 'REVAL', 'description', 'Counterparty', false, 'Text', 50, true, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '7e7f7f47-add7-476b-8dc3-f80cb0693c79', '842704a7-fc30-4054-b5b0-dd29a515ed6d', 'OP', 'DS', 'DS', 'DS', 'MN');
// INSERT INTO transaction_parameter (id, template, "descriptionPlaceHolder", "attribute1Title", "attribute1IsMandatory", "attribute1Type", "attribute1Length", "attribute1IsHeader", "attribute2Title", "attribute2IsMandatory", "attribute2Type", "attribute2Length", "attribute2IsHeader", "attribute3Title", "attribute3IsMandatory", "attribute3Type", "attribute3Length", "attribute3IsHeader", "attribute4Title", "attribute4IsMandatory", "attribute4Type", "attribute4Length", "attribute4IsHeader", "attribute5Title", "attribute5IsMandatory", "attribute5Type", "attribute5Length", "attribute5IsHeader", "attribute6Title", "attribute6IsMandatory", "attribute6Type", "attribute6Length", "attribute6IsHeader", "attribute7Title", "attribute7IsMandatory", "attribute7Type", "attribute7Length", "attribute7IsHeader", "attribute8Title", "attribute8IsMandatory", "attribute8Type", "attribute8Length", "attribute8IsHeader", "attribute9Title", "attribute9IsMandatory", "attribute9Type", "attribute9Length", "attribute9IsHeader", "attribute10Title", "attribute10IsMandatory", "attribute10Type", "attribute10Length", "attribute10IsHeader", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId", "productMandatoryType", "projectMandatoryType", "costCenterMandatoryType", "customerMandatoryType", "evidenceMandatoryType") VALUES ('ff4d6e95-ecb0-4637-b17b-23be9500b2fe', 'MARTI', 'description', 'Counterparty', false, 'Text', 50, true, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '7e7f7f47-add7-476b-8dc3-f80cb0693c79', 'e5d16a71-9395-481f-bf47-ac076d9a097f', 'OP', 'DS', 'DS', 'DS', 'MN');
// INSERT INTO transaction_parameter (id, template, "descriptionPlaceHolder", "attribute1Title", "attribute1IsMandatory", "attribute1Type", "attribute1Length", "attribute1IsHeader", "attribute2Title", "attribute2IsMandatory", "attribute2Type", "attribute2Length", "attribute2IsHeader", "attribute3Title", "attribute3IsMandatory", "attribute3Type", "attribute3Length", "attribute3IsHeader", "attribute4Title", "attribute4IsMandatory", "attribute4Type", "attribute4Length", "attribute4IsHeader", "attribute5Title", "attribute5IsMandatory", "attribute5Type", "attribute5Length", "attribute5IsHeader", "attribute6Title", "attribute6IsMandatory", "attribute6Type", "attribute6Length", "attribute6IsHeader", "attribute7Title", "attribute7IsMandatory", "attribute7Type", "attribute7Length", "attribute7IsHeader", "attribute8Title", "attribute8IsMandatory", "attribute8Type", "attribute8Length", "attribute8IsHeader", "attribute9Title", "attribute9IsMandatory", "attribute9Type", "attribute9Length", "attribute9IsHeader", "attribute10Title", "attribute10IsMandatory", "attribute10Type", "attribute10Length", "attribute10IsHeader", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId", "productMandatoryType", "projectMandatoryType", "costCenterMandatoryType", "customerMandatoryType", "evidenceMandatoryType") VALUES ('2c1e32f4-5c40-42f2-898c-cdb61f861639', 'MARDI', 'description', 'Counterparty', false, 'Text', 50, true, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '7e7f7f47-add7-476b-8dc3-f80cb0693c79', 'd74cf189-3ab6-4378-b031-700f29f542fa', 'OP', 'DS', 'DS', 'DS', 'MN');
// INSERT INTO transaction_parameter (id, template, "descriptionPlaceHolder", "attribute1Title", "attribute1IsMandatory", "attribute1Type", "attribute1Length", "attribute1IsHeader", "attribute2Title", "attribute2IsMandatory", "attribute2Type", "attribute2Length", "attribute2IsHeader", "attribute3Title", "attribute3IsMandatory", "attribute3Type", "attribute3Length", "attribute3IsHeader", "attribute4Title", "attribute4IsMandatory", "attribute4Type", "attribute4Length", "attribute4IsHeader", "attribute5Title", "attribute5IsMandatory", "attribute5Type", "attribute5Length", "attribute5IsHeader", "attribute6Title", "attribute6IsMandatory", "attribute6Type", "attribute6Length", "attribute6IsHeader", "attribute7Title", "attribute7IsMandatory", "attribute7Type", "attribute7Length", "attribute7IsHeader", "attribute8Title", "attribute8IsMandatory", "attribute8Type", "attribute8Length", "attribute8IsHeader", "attribute9Title", "attribute9IsMandatory", "attribute9Type", "attribute9Length", "attribute9IsHeader", "attribute10Title", "attribute10IsMandatory", "attribute10Type", "attribute10Length", "attribute10IsHeader", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId", "productMandatoryType", "projectMandatoryType", "costCenterMandatoryType", "customerMandatoryType", "evidenceMandatoryType") VALUES ('02bd0d08-ef56-455b-ac57-c5ac99d0e976', 'MARVE', 'description', 'Counterparty', false, 'Text', 50, true, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '7e7f7f47-add7-476b-8dc3-f80cb0693c79', '101b5bef-93ca-4f0d-83e5-0c51e9bcbc24', 'OP', 'DS', 'DS', 'DS', 'MN');
// INSERT INTO transaction_parameter (id, template, "descriptionPlaceHolder", "attribute1Title", "attribute1IsMandatory", "attribute1Type", "attribute1Length", "attribute1IsHeader", "attribute2Title", "attribute2IsMandatory", "attribute2Type", "attribute2Length", "attribute2IsHeader", "attribute3Title", "attribute3IsMandatory", "attribute3Type", "attribute3Length", "attribute3IsHeader", "attribute4Title", "attribute4IsMandatory", "attribute4Type", "attribute4Length", "attribute4IsHeader", "attribute5Title", "attribute5IsMandatory", "attribute5Type", "attribute5Length", "attribute5IsHeader", "attribute6Title", "attribute6IsMandatory", "attribute6Type", "attribute6Length", "attribute6IsHeader", "attribute7Title", "attribute7IsMandatory", "attribute7Type", "attribute7Length", "attribute7IsHeader", "attribute8Title", "attribute8IsMandatory", "attribute8Type", "attribute8Length", "attribute8IsHeader", "attribute9Title", "attribute9IsMandatory", "attribute9Type", "attribute9Length", "attribute9IsHeader", "attribute10Title", "attribute10IsMandatory", "attribute10Type", "attribute10Length", "attribute10IsHeader", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId", "productMandatoryType", "projectMandatoryType", "costCenterMandatoryType", "customerMandatoryType", "evidenceMandatoryType") VALUES ('a071a89a-2781-4bc9-9121-a890b4370132', 'MARVE', 'description', 'Counterparty', false, 'Text', 50, true, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '7e7f7f47-add7-476b-8dc3-f80cb0693c79', '6ecf86a4-756d-43b1-aff6-6976a0593db3', 'OP', 'DS', 'DS', 'DS', 'MN');
// INSERT INTO transaction_parameter (id, template, "descriptionPlaceHolder", "attribute1Title", "attribute1IsMandatory", "attribute1Type", "attribute1Length", "attribute1IsHeader", "attribute2Title", "attribute2IsMandatory", "attribute2Type", "attribute2Length", "attribute2IsHeader", "attribute3Title", "attribute3IsMandatory", "attribute3Type", "attribute3Length", "attribute3IsHeader", "attribute4Title", "attribute4IsMandatory", "attribute4Type", "attribute4Length", "attribute4IsHeader", "attribute5Title", "attribute5IsMandatory", "attribute5Type", "attribute5Length", "attribute5IsHeader", "attribute6Title", "attribute6IsMandatory", "attribute6Type", "attribute6Length", "attribute6IsHeader", "attribute7Title", "attribute7IsMandatory", "attribute7Type", "attribute7Length", "attribute7IsHeader", "attribute8Title", "attribute8IsMandatory", "attribute8Type", "attribute8Length", "attribute8IsHeader", "attribute9Title", "attribute9IsMandatory", "attribute9Type", "attribute9Length", "attribute9IsHeader", "attribute10Title", "attribute10IsMandatory", "attribute10Type", "attribute10Length", "attribute10IsHeader", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId", "productMandatoryType", "projectMandatoryType", "costCenterMandatoryType", "customerMandatoryType", "evidenceMandatoryType") VALUES ('17152e45-ecc1-43f6-b45f-027133533ebd', 'GAWOS', 'description', 'Counterparty', false, 'Text', 50, true, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, 'abe13a68-f719-4dbd-8c6c-ddb89dd031d8', '0d40be97-9d43-4fd1-9372-61e826c6b2ca', 'OP', 'DS', 'DS', 'DS', 'MN');
// INSERT INTO transaction_parameter (id, template, "descriptionPlaceHolder", "attribute1Title", "attribute1IsMandatory", "attribute1Type", "attribute1Length", "attribute1IsHeader", "attribute2Title", "attribute2IsMandatory", "attribute2Type", "attribute2Length", "attribute2IsHeader", "attribute3Title", "attribute3IsMandatory", "attribute3Type", "attribute3Length", "attribute3IsHeader", "attribute4Title", "attribute4IsMandatory", "attribute4Type", "attribute4Length", "attribute4IsHeader", "attribute5Title", "attribute5IsMandatory", "attribute5Type", "attribute5Length", "attribute5IsHeader", "attribute6Title", "attribute6IsMandatory", "attribute6Type", "attribute6Length", "attribute6IsHeader", "attribute7Title", "attribute7IsMandatory", "attribute7Type", "attribute7Length", "attribute7IsHeader", "attribute8Title", "attribute8IsMandatory", "attribute8Type", "attribute8Length", "attribute8IsHeader", "attribute9Title", "attribute9IsMandatory", "attribute9Type", "attribute9Length", "attribute9IsHeader", "attribute10Title", "attribute10IsMandatory", "attribute10Type", "attribute10Length", "attribute10IsHeader", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId", "productMandatoryType", "projectMandatoryType", "costCenterMandatoryType", "customerMandatoryType", "evidenceMandatoryType") VALUES ('c5e5b6cf-57ca-43ef-be0c-1a313fd0485b', 'GAWOT', 'description', 'Counterparty', false, 'Text', 50, true, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, 'abe13a68-f719-4dbd-8c6c-ddb89dd031d8', '1337b430-dae3-4572-ac71-d0b178c01a22', 'OP', 'DS', 'DS', 'DS', 'MN');
// INSERT INTO transaction_parameter (id, template, "descriptionPlaceHolder", "attribute1Title", "attribute1IsMandatory", "attribute1Type", "attribute1Length", "attribute1IsHeader", "attribute2Title", "attribute2IsMandatory", "attribute2Type", "attribute2Length", "attribute2IsHeader", "attribute3Title", "attribute3IsMandatory", "attribute3Type", "attribute3Length", "attribute3IsHeader", "attribute4Title", "attribute4IsMandatory", "attribute4Type", "attribute4Length", "attribute4IsHeader", "attribute5Title", "attribute5IsMandatory", "attribute5Type", "attribute5Length", "attribute5IsHeader", "attribute6Title", "attribute6IsMandatory", "attribute6Type", "attribute6Length", "attribute6IsHeader", "attribute7Title", "attribute7IsMandatory", "attribute7Type", "attribute7Length", "attribute7IsHeader", "attribute8Title", "attribute8IsMandatory", "attribute8Type", "attribute8Length", "attribute8IsHeader", "attribute9Title", "attribute9IsMandatory", "attribute9Type", "attribute9Length", "attribute9IsHeader", "attribute10Title", "attribute10IsMandatory", "attribute10Type", "attribute10Length", "attribute10IsHeader", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId", "productMandatoryType", "projectMandatoryType", "costCenterMandatoryType", "customerMandatoryType", "evidenceMandatoryType") VALUES ('02a413c7-2aaa-4627-80bc-d4288edc80b4', 'GAUTA', 'description', 'Counterparty', false, 'Text', 50, true, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, 'abe13a68-f719-4dbd-8c6c-ddb89dd031d8', '10de580b-a6b6-438a-8099-26a6774c6160', 'OP', 'DS', 'DS', 'DS', 'MN');
// INSERT INTO transaction_parameter (id, template, "descriptionPlaceHolder", "attribute1Title", "attribute1IsMandatory", "attribute1Type", "attribute1Length", "attribute1IsHeader", "attribute2Title", "attribute2IsMandatory", "attribute2Type", "attribute2Length", "attribute2IsHeader", "attribute3Title", "attribute3IsMandatory", "attribute3Type", "attribute3Length", "attribute3IsHeader", "attribute4Title", "attribute4IsMandatory", "attribute4Type", "attribute4Length", "attribute4IsHeader", "attribute5Title", "attribute5IsMandatory", "attribute5Type", "attribute5Length", "attribute5IsHeader", "attribute6Title", "attribute6IsMandatory", "attribute6Type", "attribute6Length", "attribute6IsHeader", "attribute7Title", "attribute7IsMandatory", "attribute7Type", "attribute7Length", "attribute7IsHeader", "attribute8Title", "attribute8IsMandatory", "attribute8Type", "attribute8Length", "attribute8IsHeader", "attribute9Title", "attribute9IsMandatory", "attribute9Type", "attribute9Length", "attribute9IsHeader", "attribute10Title", "attribute10IsMandatory", "attribute10Type", "attribute10Length", "attribute10IsHeader", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId", "productMandatoryType", "projectMandatoryType", "costCenterMandatoryType", "customerMandatoryType", "evidenceMandatoryType") VALUES ('f7cebb74-b271-4086-bfad-89fb62deb96c', 'GADMI', 'description', 'Counterparty', false, 'Text', 50, true, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, 'abe13a68-f719-4dbd-8c6c-ddb89dd031d8', '729f5e0b-4f4c-4811-9968-f4db41a14ed3', 'OP', 'DS', 'DS', 'DS', 'MN');
// INSERT INTO transaction_parameter (id, template, "descriptionPlaceHolder", "attribute1Title", "attribute1IsMandatory", "attribute1Type", "attribute1Length", "attribute1IsHeader", "attribute2Title", "attribute2IsMandatory", "attribute2Type", "attribute2Length", "attribute2IsHeader", "attribute3Title", "attribute3IsMandatory", "attribute3Type", "attribute3Length", "attribute3IsHeader", "attribute4Title", "attribute4IsMandatory", "attribute4Type", "attribute4Length", "attribute4IsHeader", "attribute5Title", "attribute5IsMandatory", "attribute5Type", "attribute5Length", "attribute5IsHeader", "attribute6Title", "attribute6IsMandatory", "attribute6Type", "attribute6Length", "attribute6IsHeader", "attribute7Title", "attribute7IsMandatory", "attribute7Type", "attribute7Length", "attribute7IsHeader", "attribute8Title", "attribute8IsMandatory", "attribute8Type", "attribute8Length", "attribute8IsHeader", "attribute9Title", "attribute9IsMandatory", "attribute9Type", "attribute9Length", "attribute9IsHeader", "attribute10Title", "attribute10IsMandatory", "attribute10Type", "attribute10Length", "attribute10IsHeader", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId", "productMandatoryType", "projectMandatoryType", "costCenterMandatoryType", "customerMandatoryType", "evidenceMandatoryType") VALUES ('832eec82-9d09-4c0a-88d0-5c88cf00a999', 'GAOTH', 'description', 'Counterparty', false, 'Text', 50, true, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, 'abe13a68-f719-4dbd-8c6c-ddb89dd031d8', 'a595e8ce-c194-4dc0-8a3c-2b05036d58c1', 'OP', 'DS', 'DS', 'DS', 'MN');
// INSERT INTO transaction_parameter (id, template, "descriptionPlaceHolder", "attribute1Title", "attribute1IsMandatory", "attribute1Type", "attribute1Length", "attribute1IsHeader", "attribute2Title", "attribute2IsMandatory", "attribute2Type", "attribute2Length", "attribute2IsHeader", "attribute3Title", "attribute3IsMandatory", "attribute3Type", "attribute3Length", "attribute3IsHeader", "attribute4Title", "attribute4IsMandatory", "attribute4Type", "attribute4Length", "attribute4IsHeader", "attribute5Title", "attribute5IsMandatory", "attribute5Type", "attribute5Length", "attribute5IsHeader", "attribute6Title", "attribute6IsMandatory", "attribute6Type", "attribute6Length", "attribute6IsHeader", "attribute7Title", "attribute7IsMandatory", "attribute7Type", "attribute7Length", "attribute7IsHeader", "attribute8Title", "attribute8IsMandatory", "attribute8Type", "attribute8Length", "attribute8IsHeader", "attribute9Title", "attribute9IsMandatory", "attribute9Type", "attribute9Length", "attribute9IsHeader", "attribute10Title", "attribute10IsMandatory", "attribute10Type", "attribute10Length", "attribute10IsHeader", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId", "productMandatoryType", "projectMandatoryType", "costCenterMandatoryType", "customerMandatoryType", "evidenceMandatoryType") VALUES ('47285f93-4bec-4d29-997f-d2dd12e6b743', 'PRODE', 'description', 'Counterparty', false, 'Text', 50, true, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '89252ec9-a9f5-4b3a-895b-ee7250c20a77', '60fa284d-ff54-498d-a94e-651c38d5f611', 'OP', 'DS', 'DS', 'DS', 'MN');
// INSERT INTO transaction_parameter (id, template, "descriptionPlaceHolder", "attribute1Title", "attribute1IsMandatory", "attribute1Type", "attribute1Length", "attribute1IsHeader", "attribute2Title", "attribute2IsMandatory", "attribute2Type", "attribute2Length", "attribute2IsHeader", "attribute3Title", "attribute3IsMandatory", "attribute3Type", "attribute3Length", "attribute3IsHeader", "attribute4Title", "attribute4IsMandatory", "attribute4Type", "attribute4Length", "attribute4IsHeader", "attribute5Title", "attribute5IsMandatory", "attribute5Type", "attribute5Length", "attribute5IsHeader", "attribute6Title", "attribute6IsMandatory", "attribute6Type", "attribute6Length", "attribute6IsHeader", "attribute7Title", "attribute7IsMandatory", "attribute7Type", "attribute7Length", "attribute7IsHeader", "attribute8Title", "attribute8IsMandatory", "attribute8Type", "attribute8Length", "attribute8IsHeader", "attribute9Title", "attribute9IsMandatory", "attribute9Type", "attribute9Length", "attribute9IsHeader", "attribute10Title", "attribute10IsMandatory", "attribute10Type", "attribute10Length", "attribute10IsHeader", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId", "productMandatoryType", "projectMandatoryType", "costCenterMandatoryType", "customerMandatoryType", "evidenceMandatoryType") VALUES ('97c61ace-27a3-4b42-a432-c76c5052ace2', 'PROST', 'description', 'Counterparty', false, 'Text', 50, true, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '89252ec9-a9f5-4b3a-895b-ee7250c20a77', 'b40768ee-aafa-498c-a6b9-597fa4a48401', 'OP', 'DS', 'DS', 'DS', 'MN');
// INSERT INTO transaction_parameter (id, template, "descriptionPlaceHolder", "attribute1Title", "attribute1IsMandatory", "attribute1Type", "attribute1Length", "attribute1IsHeader", "attribute2Title", "attribute2IsMandatory", "attribute2Type", "attribute2Length", "attribute2IsHeader", "attribute3Title", "attribute3IsMandatory", "attribute3Type", "attribute3Length", "attribute3IsHeader", "attribute4Title", "attribute4IsMandatory", "attribute4Type", "attribute4Length", "attribute4IsHeader", "attribute5Title", "attribute5IsMandatory", "attribute5Type", "attribute5Length", "attribute5IsHeader", "attribute6Title", "attribute6IsMandatory", "attribute6Type", "attribute6Length", "attribute6IsHeader", "attribute7Title", "attribute7IsMandatory", "attribute7Type", "attribute7Length", "attribute7IsHeader", "attribute8Title", "attribute8IsMandatory", "attribute8Type", "attribute8Length", "attribute8IsHeader", "attribute9Title", "attribute9IsMandatory", "attribute9Type", "attribute9Length", "attribute9IsHeader", "attribute10Title", "attribute10IsMandatory", "attribute10Type", "attribute10Length", "attribute10IsHeader", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId", "productMandatoryType", "projectMandatoryType", "costCenterMandatoryType", "customerMandatoryType", "evidenceMandatoryType") VALUES ('d48049d0-ce0f-4494-8506-700cac001472', 'PROOP', 'description', 'Counterparty', false, 'Text', 50, true, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '89252ec9-a9f5-4b3a-895b-ee7250c20a77', 'd0d49294-76e1-4487-b783-429fc07bdf2e', 'OP', 'DS', 'DS', 'DS', 'MN');
// INSERT INTO transaction_parameter (id, template, "descriptionPlaceHolder", "attribute1Title", "attribute1IsMandatory", "attribute1Type", "attribute1Length", "attribute1IsHeader", "attribute2Title", "attribute2IsMandatory", "attribute2Type", "attribute2Length", "attribute2IsHeader", "attribute3Title", "attribute3IsMandatory", "attribute3Type", "attribute3Length", "attribute3IsHeader", "attribute4Title", "attribute4IsMandatory", "attribute4Type", "attribute4Length", "attribute4IsHeader", "attribute5Title", "attribute5IsMandatory", "attribute5Type", "attribute5Length", "attribute5IsHeader", "attribute6Title", "attribute6IsMandatory", "attribute6Type", "attribute6Length", "attribute6IsHeader", "attribute7Title", "attribute7IsMandatory", "attribute7Type", "attribute7Length", "attribute7IsHeader", "attribute8Title", "attribute8IsMandatory", "attribute8Type", "attribute8Length", "attribute8IsHeader", "attribute9Title", "attribute9IsMandatory", "attribute9Type", "attribute9Length", "attribute9IsHeader", "attribute10Title", "attribute10IsMandatory", "attribute10Type", "attribute10Length", "attribute10IsHeader", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId", "productMandatoryType", "projectMandatoryType", "costCenterMandatoryType", "customerMandatoryType", "evidenceMandatoryType") VALUES ('b9e4c671-466d-4a07-ac9f-bd13d6efb730', 'PROTH', 'description', 'Counterparty', false, 'Text', 50, true, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '89252ec9-a9f5-4b3a-895b-ee7250c20a77', '79009b03-2a96-41f4-9680-7af972bf2491', 'OP', 'DS', 'DS', 'DS', 'MN');
// INSERT INTO transaction_parameter (id, template, "descriptionPlaceHolder", "attribute1Title", "attribute1IsMandatory", "attribute1Type", "attribute1Length", "attribute1IsHeader", "attribute2Title", "attribute2IsMandatory", "attribute2Type", "attribute2Length", "attribute2IsHeader", "attribute3Title", "attribute3IsMandatory", "attribute3Type", "attribute3Length", "attribute3IsHeader", "attribute4Title", "attribute4IsMandatory", "attribute4Type", "attribute4Length", "attribute4IsHeader", "attribute5Title", "attribute5IsMandatory", "attribute5Type", "attribute5Length", "attribute5IsHeader", "attribute6Title", "attribute6IsMandatory", "attribute6Type", "attribute6Length", "attribute6IsHeader", "attribute7Title", "attribute7IsMandatory", "attribute7Type", "attribute7Length", "attribute7IsHeader", "attribute8Title", "attribute8IsMandatory", "attribute8Type", "attribute8Length", "attribute8IsHeader", "attribute9Title", "attribute9IsMandatory", "attribute9Type", "attribute9Length", "attribute9IsHeader", "attribute10Title", "attribute10IsMandatory", "attribute10Type", "attribute10Length", "attribute10IsHeader", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId", "productMandatoryType", "projectMandatoryType", "costCenterMandatoryType", "customerMandatoryType", "evidenceMandatoryType") VALUES ('9ff15429-5486-4c9b-90ef-c5476da7abb8', 'INTER', 'description', 'Counterparty', false, 'Text', 50, true, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '65071cde-0ad8-4042-b58a-9e583b3d029e', '3352b9a8-49be-43ba-997d-42136587fd06', 'OP', 'DS', 'DS', 'DS', 'MN');
// INSERT INTO transaction_parameter (id, template, "descriptionPlaceHolder", "attribute1Title", "attribute1IsMandatory", "attribute1Type", "attribute1Length", "attribute1IsHeader", "attribute2Title", "attribute2IsMandatory", "attribute2Type", "attribute2Length", "attribute2IsHeader", "attribute3Title", "attribute3IsMandatory", "attribute3Type", "attribute3Length", "attribute3IsHeader", "attribute4Title", "attribute4IsMandatory", "attribute4Type", "attribute4Length", "attribute4IsHeader", "attribute5Title", "attribute5IsMandatory", "attribute5Type", "attribute5Length", "attribute5IsHeader", "attribute6Title", "attribute6IsMandatory", "attribute6Type", "attribute6Length", "attribute6IsHeader", "attribute7Title", "attribute7IsMandatory", "attribute7Type", "attribute7Length", "attribute7IsHeader", "attribute8Title", "attribute8IsMandatory", "attribute8Type", "attribute8Length", "attribute8IsHeader", "attribute9Title", "attribute9IsMandatory", "attribute9Type", "attribute9Length", "attribute9IsHeader", "attribute10Title", "attribute10IsMandatory", "attribute10Type", "attribute10Length", "attribute10IsHeader", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId", "productMandatoryType", "projectMandatoryType", "costCenterMandatoryType", "customerMandatoryType", "evidenceMandatoryType") VALUES ('84adfb66-025f-4ecd-b785-b9f590de4087', 'TAXES', 'description', 'Counterparty', false, 'Text', 50, true, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '65071cde-0ad8-4042-b58a-9e583b3d029e', 'ae19ca0b-32dd-4f39-b228-a288e925bf3a', 'OP', 'DS', 'DS', 'DS', 'MN');
// INSERT INTO transaction_parameter (id, template, "descriptionPlaceHolder", "attribute1Title", "attribute1IsMandatory", "attribute1Type", "attribute1Length", "attribute1IsHeader", "attribute2Title", "attribute2IsMandatory", "attribute2Type", "attribute2Length", "attribute2IsHeader", "attribute3Title", "attribute3IsMandatory", "attribute3Type", "attribute3Length", "attribute3IsHeader", "attribute4Title", "attribute4IsMandatory", "attribute4Type", "attribute4Length", "attribute4IsHeader", "attribute5Title", "attribute5IsMandatory", "attribute5Type", "attribute5Length", "attribute5IsHeader", "attribute6Title", "attribute6IsMandatory", "attribute6Type", "attribute6Length", "attribute6IsHeader", "attribute7Title", "attribute7IsMandatory", "attribute7Type", "attribute7Length", "attribute7IsHeader", "attribute8Title", "attribute8IsMandatory", "attribute8Type", "attribute8Length", "attribute8IsHeader", "attribute9Title", "attribute9IsMandatory", "attribute9Type", "attribute9Length", "attribute9IsHeader", "attribute10Title", "attribute10IsMandatory", "attribute10Type", "attribute10Length", "attribute10IsHeader", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId", "productMandatoryType", "projectMandatoryType", "costCenterMandatoryType", "customerMandatoryType", "evidenceMandatoryType") VALUES ('c057ca05-da89-4f9a-b3b7-8a21f4137b67', 'FPAYM', 'description', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '306c20e2-1d45-450d-90e2-a6c005fca7f4', 'dc679089-6026-4fd8-b5e6-e3b852c17549', 'OP', 'DS', 'DS', 'DS', 'MN');
// INSERT INTO transaction_parameter (id, template, "descriptionPlaceHolder", "attribute1Title", "attribute1IsMandatory", "attribute1Type", "attribute1Length", "attribute1IsHeader", "attribute2Title", "attribute2IsMandatory", "attribute2Type", "attribute2Length", "attribute2IsHeader", "attribute3Title", "attribute3IsMandatory", "attribute3Type", "attribute3Length", "attribute3IsHeader", "attribute4Title", "attribute4IsMandatory", "attribute4Type", "attribute4Length", "attribute4IsHeader", "attribute5Title", "attribute5IsMandatory", "attribute5Type", "attribute5Length", "attribute5IsHeader", "attribute6Title", "attribute6IsMandatory", "attribute6Type", "attribute6Length", "attribute6IsHeader", "attribute7Title", "attribute7IsMandatory", "attribute7Type", "attribute7Length", "attribute7IsHeader", "attribute8Title", "attribute8IsMandatory", "attribute8Type", "attribute8Length", "attribute8IsHeader", "attribute9Title", "attribute9IsMandatory", "attribute9Type", "attribute9Length", "attribute9IsHeader", "attribute10Title", "attribute10IsMandatory", "attribute10Type", "attribute10Length", "attribute10IsHeader", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId", "productMandatoryType", "projectMandatoryType", "costCenterMandatoryType", "customerMandatoryType", "evidenceMandatoryType") VALUES ('76af179b-6afb-4db2-a172-723fbba15092', 'FRETN', 'description', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '306c20e2-1d45-450d-90e2-a6c005fca7f4', 'd5ff1d19-8baa-47ba-9a73-5c0549ac5c54', 'OP', 'DS', 'DS', 'DS', 'MN');
// INSERT INTO transaction_parameter (id, template, "descriptionPlaceHolder", "attribute1Title", "attribute1IsMandatory", "attribute1Type", "attribute1Length", "attribute1IsHeader", "attribute2Title", "attribute2IsMandatory", "attribute2Type", "attribute2Length", "attribute2IsHeader", "attribute3Title", "attribute3IsMandatory", "attribute3Type", "attribute3Length", "attribute3IsHeader", "attribute4Title", "attribute4IsMandatory", "attribute4Type", "attribute4Length", "attribute4IsHeader", "attribute5Title", "attribute5IsMandatory", "attribute5Type", "attribute5Length", "attribute5IsHeader", "attribute6Title", "attribute6IsMandatory", "attribute6Type", "attribute6Length", "attribute6IsHeader", "attribute7Title", "attribute7IsMandatory", "attribute7Type", "attribute7Length", "attribute7IsHeader", "attribute8Title", "attribute8IsMandatory", "attribute8Type", "attribute8Length", "attribute8IsHeader", "attribute9Title", "attribute9IsMandatory", "attribute9Type", "attribute9Length", "attribute9IsHeader", "attribute10Title", "attribute10IsMandatory", "attribute10Type", "attribute10Length", "attribute10IsHeader", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId", "productMandatoryType", "projectMandatoryType", "costCenterMandatoryType", "customerMandatoryType", "evidenceMandatoryType") VALUES ('816c72ed-ccc3-4b06-8b3d-3bd0b87bb758', 'FCANC', 'description', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '306c20e2-1d45-450d-90e2-a6c005fca7f4', '1e26c06c-9437-44ad-bf03-73d58c419eff', 'OP', 'DS', 'DS', 'DS', 'MN');
// INSERT INTO transaction_parameter (id, template, "descriptionPlaceHolder", "attribute1Title", "attribute1IsMandatory", "attribute1Type", "attribute1Length", "attribute1IsHeader", "attribute2Title", "attribute2IsMandatory", "attribute2Type", "attribute2Length", "attribute2IsHeader", "attribute3Title", "attribute3IsMandatory", "attribute3Type", "attribute3Length", "attribute3IsHeader", "attribute4Title", "attribute4IsMandatory", "attribute4Type", "attribute4Length", "attribute4IsHeader", "attribute5Title", "attribute5IsMandatory", "attribute5Type", "attribute5Length", "attribute5IsHeader", "attribute6Title", "attribute6IsMandatory", "attribute6Type", "attribute6Length", "attribute6IsHeader", "attribute7Title", "attribute7IsMandatory", "attribute7Type", "attribute7Length", "attribute7IsHeader", "attribute8Title", "attribute8IsMandatory", "attribute8Type", "attribute8Length", "attribute8IsHeader", "attribute9Title", "attribute9IsMandatory", "attribute9Type", "attribute9Length", "attribute9IsHeader", "attribute10Title", "attribute10IsMandatory", "attribute10Type", "attribute10Length", "attribute10IsHeader", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId", "productMandatoryType", "projectMandatoryType", "costCenterMandatoryType", "customerMandatoryType", "evidenceMandatoryType") VALUES ('0ccf488d-3942-48ab-a8ce-40a9e7effdde', 'ALIC', 'description', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, 'c39e2c2c-e689-4dac-b81b-ba3697b487bc', '1e1c488d-2272-4bf5-9468-89f03ca50594', 'OP', 'DS', 'DS', 'DS', 'MN');
// INSERT INTO transaction_parameter (id, template, "descriptionPlaceHolder", "attribute1Title", "attribute1IsMandatory", "attribute1Type", "attribute1Length", "attribute1IsHeader", "attribute2Title", "attribute2IsMandatory", "attribute2Type", "attribute2Length", "attribute2IsHeader", "attribute3Title", "attribute3IsMandatory", "attribute3Type", "attribute3Length", "attribute3IsHeader", "attribute4Title", "attribute4IsMandatory", "attribute4Type", "attribute4Length", "attribute4IsHeader", "attribute5Title", "attribute5IsMandatory", "attribute5Type", "attribute5Length", "attribute5IsHeader", "attribute6Title", "attribute6IsMandatory", "attribute6Type", "attribute6Length", "attribute6IsHeader", "attribute7Title", "attribute7IsMandatory", "attribute7Type", "attribute7Length", "attribute7IsHeader", "attribute8Title", "attribute8IsMandatory", "attribute8Type", "attribute8Length", "attribute8IsHeader", "attribute9Title", "attribute9IsMandatory", "attribute9Type", "attribute9Length", "attribute9IsHeader", "attribute10Title", "attribute10IsMandatory", "attribute10Type", "attribute10Length", "attribute10IsHeader", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId", "productMandatoryType", "projectMandatoryType", "costCenterMandatoryType", "customerMandatoryType", "evidenceMandatoryType") VALUES ('bd917d31-ccd6-4abf-91be-b431589b2db2', 'REVS', 'description', 'Invoice', true, 'Text', 50, true, 'Due Date', true, 'date', NULL, true, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, 'd3a78c99-0e16-4276-8851-7c5e3bdf3fe7', NULL, 'OP', 'DS', 'DS', 'MN', 'MN');
// INSERT INTO transaction_parameter (id, template, "descriptionPlaceHolder", "attribute1Title", "attribute1IsMandatory", "attribute1Type", "attribute1Length", "attribute1IsHeader", "attribute2Title", "attribute2IsMandatory", "attribute2Type", "attribute2Length", "attribute2IsHeader", "attribute3Title", "attribute3IsMandatory", "attribute3Type", "attribute3Length", "attribute3IsHeader", "attribute4Title", "attribute4IsMandatory", "attribute4Type", "attribute4Length", "attribute4IsHeader", "attribute5Title", "attribute5IsMandatory", "attribute5Type", "attribute5Length", "attribute5IsHeader", "attribute6Title", "attribute6IsMandatory", "attribute6Type", "attribute6Length", "attribute6IsHeader", "attribute7Title", "attribute7IsMandatory", "attribute7Type", "attribute7Length", "attribute7IsHeader", "attribute8Title", "attribute8IsMandatory", "attribute8Type", "attribute8Length", "attribute8IsHeader", "attribute9Title", "attribute9IsMandatory", "attribute9Type", "attribute9Length", "attribute9IsHeader", "attribute10Title", "attribute10IsMandatory", "attribute10Type", "attribute10Length", "attribute10IsHeader", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId", "productMandatoryType", "projectMandatoryType", "costCenterMandatoryType", "customerMandatoryType", "evidenceMandatoryType") VALUES ('d67744c1-774e-4e4b-ab30-e9119bb78a48', 'PREWT', 'description', 'Counterparty', false, 'Text', 50, true, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, 'bff18b96-6ba6-41bc-bd10-3a052f1f8d4c', '6318381e-f3c1-49bf-9cb3-38150f1ef385', 'OP', 'DS', 'DS', 'DS', 'MN');
// INSERT INTO transaction_parameter (id, template, "descriptionPlaceHolder", "attribute1Title", "attribute1IsMandatory", "attribute1Type", "attribute1Length", "attribute1IsHeader", "attribute2Title", "attribute2IsMandatory", "attribute2Type", "attribute2Length", "attribute2IsHeader", "attribute3Title", "attribute3IsMandatory", "attribute3Type", "attribute3Length", "attribute3IsHeader", "attribute4Title", "attribute4IsMandatory", "attribute4Type", "attribute4Length", "attribute4IsHeader", "attribute5Title", "attribute5IsMandatory", "attribute5Type", "attribute5Length", "attribute5IsHeader", "attribute6Title", "attribute6IsMandatory", "attribute6Type", "attribute6Length", "attribute6IsHeader", "attribute7Title", "attribute7IsMandatory", "attribute7Type", "attribute7Length", "attribute7IsHeader", "attribute8Title", "attribute8IsMandatory", "attribute8Type", "attribute8Length", "attribute8IsHeader", "attribute9Title", "attribute9IsMandatory", "attribute9Type", "attribute9Length", "attribute9IsHeader", "attribute10Title", "attribute10IsMandatory", "attribute10Type", "attribute10Length", "attribute10IsHeader", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId", "productMandatoryType", "projectMandatoryType", "costCenterMandatoryType", "customerMandatoryType", "evidenceMandatoryType") VALUES ('b7023b67-8b5f-4dd8-aadd-37843ff6ed3d', 'PREVAT', 'description', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, 'bff18b96-6ba6-41bc-bd10-3a052f1f8d4c', '4c618169-89c7-47cc-87be-f22133768910', 'OP', 'DS', 'DS', 'DS', 'MN');
// INSERT INTO transaction_parameter (id, template, "descriptionPlaceHolder", "attribute1Title", "attribute1IsMandatory", "attribute1Type", "attribute1Length", "attribute1IsHeader", "attribute2Title", "attribute2IsMandatory", "attribute2Type", "attribute2Length", "attribute2IsHeader", "attribute3Title", "attribute3IsMandatory", "attribute3Type", "attribute3Length", "attribute3IsHeader", "attribute4Title", "attribute4IsMandatory", "attribute4Type", "attribute4Length", "attribute4IsHeader", "attribute5Title", "attribute5IsMandatory", "attribute5Type", "attribute5Length", "attribute5IsHeader", "attribute6Title", "attribute6IsMandatory", "attribute6Type", "attribute6Length", "attribute6IsHeader", "attribute7Title", "attribute7IsMandatory", "attribute7Type", "attribute7Length", "attribute7IsHeader", "attribute8Title", "attribute8IsMandatory", "attribute8Type", "attribute8Length", "attribute8IsHeader", "attribute9Title", "attribute9IsMandatory", "attribute9Type", "attribute9Length", "attribute9IsHeader", "attribute10Title", "attribute10IsMandatory", "attribute10Type", "attribute10Length", "attribute10IsHeader", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId", "productMandatoryType", "projectMandatoryType", "costCenterMandatoryType", "customerMandatoryType", "evidenceMandatoryType") VALUES ('e1b29834-212d-463d-8ff2-60cd379b9576', 'PREIN', 'description', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, 'bff18b96-6ba6-41bc-bd10-3a052f1f8d4c', 'ca0d0d5d-8625-47e9-b9cb-1f41f6ad420b', 'OP', 'DS', 'DS', 'DS', 'MN');
// INSERT INTO transaction_parameter (id, template, "descriptionPlaceHolder", "attribute1Title", "attribute1IsMandatory", "attribute1Type", "attribute1Length", "attribute1IsHeader", "attribute2Title", "attribute2IsMandatory", "attribute2Type", "attribute2Length", "attribute2IsHeader", "attribute3Title", "attribute3IsMandatory", "attribute3Type", "attribute3Length", "attribute3IsHeader", "attribute4Title", "attribute4IsMandatory", "attribute4Type", "attribute4Length", "attribute4IsHeader", "attribute5Title", "attribute5IsMandatory", "attribute5Type", "attribute5Length", "attribute5IsHeader", "attribute6Title", "attribute6IsMandatory", "attribute6Type", "attribute6Length", "attribute6IsHeader", "attribute7Title", "attribute7IsMandatory", "attribute7Type", "attribute7Length", "attribute7IsHeader", "attribute8Title", "attribute8IsMandatory", "attribute8Type", "attribute8Length", "attribute8IsHeader", "attribute9Title", "attribute9IsMandatory", "attribute9Type", "attribute9Length", "attribute9IsHeader", "attribute10Title", "attribute10IsMandatory", "attribute10Type", "attribute10Length", "attribute10IsHeader", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId", "productMandatoryType", "projectMandatoryType", "costCenterMandatoryType", "customerMandatoryType", "evidenceMandatoryType") VALUES ('91cd4f1e-834e-4df6-a4ce-67ff4b13f5da', 'PRERE', 'description', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, 'bff18b96-6ba6-41bc-bd10-3a052f1f8d4c', 'cbb9c8ab-d8f0-4501-ba9e-1212620d097a', 'OP', 'DS', 'DS', 'DS', 'MN');
// INSERT INTO transaction_parameter (id, template, "descriptionPlaceHolder", "attribute1Title", "attribute1IsMandatory", "attribute1Type", "attribute1Length", "attribute1IsHeader", "attribute2Title", "attribute2IsMandatory", "attribute2Type", "attribute2Length", "attribute2IsHeader", "attribute3Title", "attribute3IsMandatory", "attribute3Type", "attribute3Length", "attribute3IsHeader", "attribute4Title", "attribute4IsMandatory", "attribute4Type", "attribute4Length", "attribute4IsHeader", "attribute5Title", "attribute5IsMandatory", "attribute5Type", "attribute5Length", "attribute5IsHeader", "attribute6Title", "attribute6IsMandatory", "attribute6Type", "attribute6Length", "attribute6IsHeader", "attribute7Title", "attribute7IsMandatory", "attribute7Type", "attribute7Length", "attribute7IsHeader", "attribute8Title", "attribute8IsMandatory", "attribute8Type", "attribute8Length", "attribute8IsHeader", "attribute9Title", "attribute9IsMandatory", "attribute9Type", "attribute9Length", "attribute9IsHeader", "attribute10Title", "attribute10IsMandatory", "attribute10Type", "attribute10Length", "attribute10IsHeader", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId", "productMandatoryType", "projectMandatoryType", "costCenterMandatoryType", "customerMandatoryType", "evidenceMandatoryType") VALUES ('1827dc8f-8d0f-494c-82ac-f27163bcea78', 'COGS', 'description', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '5ac47537-3993-44d3-8861-d49ce2ff6377', 'fe072109-3516-435c-bf59-7174be8c33e7', 'OP', 'DS', 'DS', 'DS', 'MN');
// INSERT INTO transaction_parameter (id, template, "descriptionPlaceHolder", "attribute1Title", "attribute1IsMandatory", "attribute1Type", "attribute1Length", "attribute1IsHeader", "attribute2Title", "attribute2IsMandatory", "attribute2Type", "attribute2Length", "attribute2IsHeader", "attribute3Title", "attribute3IsMandatory", "attribute3Type", "attribute3Length", "attribute3IsHeader", "attribute4Title", "attribute4IsMandatory", "attribute4Type", "attribute4Length", "attribute4IsHeader", "attribute5Title", "attribute5IsMandatory", "attribute5Type", "attribute5Length", "attribute5IsHeader", "attribute6Title", "attribute6IsMandatory", "attribute6Type", "attribute6Length", "attribute6IsHeader", "attribute7Title", "attribute7IsMandatory", "attribute7Type", "attribute7Length", "attribute7IsHeader", "attribute8Title", "attribute8IsMandatory", "attribute8Type", "attribute8Length", "attribute8IsHeader", "attribute9Title", "attribute9IsMandatory", "attribute9Type", "attribute9Length", "attribute9IsHeader", "attribute10Title", "attribute10IsMandatory", "attribute10Type", "attribute10Length", "attribute10IsHeader", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId", "productMandatoryType", "projectMandatoryType", "costCenterMandatoryType", "customerMandatoryType", "evidenceMandatoryType") VALUES ('1a03428e-e77f-45d7-9758-bd7d463e18d6', 'COGS', 'description', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '5ac47537-3993-44d3-8861-d49ce2ff6377', '954df553-38bc-4ce2-bf60-c4b24bd10bb3', 'OP', 'DS', 'DS', 'DS', 'MN');
// INSERT INTO transaction_parameter (id, template, "descriptionPlaceHolder", "attribute1Title", "attribute1IsMandatory", "attribute1Type", "attribute1Length", "attribute1IsHeader", "attribute2Title", "attribute2IsMandatory", "attribute2Type", "attribute2Length", "attribute2IsHeader", "attribute3Title", "attribute3IsMandatory", "attribute3Type", "attribute3Length", "attribute3IsHeader", "attribute4Title", "attribute4IsMandatory", "attribute4Type", "attribute4Length", "attribute4IsHeader", "attribute5Title", "attribute5IsMandatory", "attribute5Type", "attribute5Length", "attribute5IsHeader", "attribute6Title", "attribute6IsMandatory", "attribute6Type", "attribute6Length", "attribute6IsHeader", "attribute7Title", "attribute7IsMandatory", "attribute7Type", "attribute7Length", "attribute7IsHeader", "attribute8Title", "attribute8IsMandatory", "attribute8Type", "attribute8Length", "attribute8IsHeader", "attribute9Title", "attribute9IsMandatory", "attribute9Type", "attribute9Length", "attribute9IsHeader", "attribute10Title", "attribute10IsMandatory", "attribute10Type", "attribute10Length", "attribute10IsHeader", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId", "productMandatoryType", "projectMandatoryType", "costCenterMandatoryType", "customerMandatoryType", "evidenceMandatoryType") VALUES ('8fa3a269-2d05-4c02-8bf4-8f29f6efa620', 'RECEIV', 'description', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '81148bc9-d53d-4c92-a5be-1ca37286fbe7', '4d823b18-f32b-439f-adad-226fbb222e82', 'OP', 'OP', 'OP', 'OP', 'OP');
// INSERT INTO transaction_parameter (id, template, "descriptionPlaceHolder", "attribute1Title", "attribute1IsMandatory", "attribute1Type", "attribute1Length", "attribute1IsHeader", "attribute2Title", "attribute2IsMandatory", "attribute2Type", "attribute2Length", "attribute2IsHeader", "attribute3Title", "attribute3IsMandatory", "attribute3Type", "attribute3Length", "attribute3IsHeader", "attribute4Title", "attribute4IsMandatory", "attribute4Type", "attribute4Length", "attribute4IsHeader", "attribute5Title", "attribute5IsMandatory", "attribute5Type", "attribute5Length", "attribute5IsHeader", "attribute6Title", "attribute6IsMandatory", "attribute6Type", "attribute6Length", "attribute6IsHeader", "attribute7Title", "attribute7IsMandatory", "attribute7Type", "attribute7Length", "attribute7IsHeader", "attribute8Title", "attribute8IsMandatory", "attribute8Type", "attribute8Length", "attribute8IsHeader", "attribute9Title", "attribute9IsMandatory", "attribute9Type", "attribute9Length", "attribute9IsHeader", "attribute10Title", "attribute10IsMandatory", "attribute10Type", "attribute10Length", "attribute10IsHeader", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId", "productMandatoryType", "projectMandatoryType", "costCenterMandatoryType", "customerMandatoryType", "evidenceMandatoryType") VALUES ('2141be1f-701a-46a3-a579-5c032936c599', 'FAPRV', 'description', 'Fase', true, 'text', 50, true, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '306c20e2-1d45-450d-90e2-a6c005fca7f4', '8fd95321-f83b-473d-8203-604706208ade', 'OP', 'DS', 'DS', 'DS', 'MN');
// INSERT INTO transaction_parameter (id, template, "descriptionPlaceHolder", "attribute1Title", "attribute1IsMandatory", "attribute1Type", "attribute1Length", "attribute1IsHeader", "attribute2Title", "attribute2IsMandatory", "attribute2Type", "attribute2Length", "attribute2IsHeader", "attribute3Title", "attribute3IsMandatory", "attribute3Type", "attribute3Length", "attribute3IsHeader", "attribute4Title", "attribute4IsMandatory", "attribute4Type", "attribute4Length", "attribute4IsHeader", "attribute5Title", "attribute5IsMandatory", "attribute5Type", "attribute5Length", "attribute5IsHeader", "attribute6Title", "attribute6IsMandatory", "attribute6Type", "attribute6Length", "attribute6IsHeader", "attribute7Title", "attribute7IsMandatory", "attribute7Type", "attribute7Length", "attribute7IsHeader", "attribute8Title", "attribute8IsMandatory", "attribute8Type", "attribute8Length", "attribute8IsHeader", "attribute9Title", "attribute9IsMandatory", "attribute9Type", "attribute9Length", "attribute9IsHeader", "attribute10Title", "attribute10IsMandatory", "attribute10Type", "attribute10Length", "attribute10IsHeader", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId", "productMandatoryType", "projectMandatoryType", "costCenterMandatoryType", "customerMandatoryType", "evidenceMandatoryType") VALUES ('eb4a7a2e-ee50-4a47-b7ba-cd942bf4d2ca', 'NOCRA', 'description', 'Asset No', true, 'Text', 50, false, 'Masa Manfaat', true, 'number', 2, false, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, 'c39e2c2c-e689-4dac-b81b-ba3697b487bc', '1f97d1fe-5a83-48ab-b226-9fb061de91bc', 'OP', 'DS', 'DS', 'DS', 'MN');


// --
// -- TOC entry 2329 (class 0 OID 49405)
// -- Dependencies: 192
// -- Data for Name: transaction_sub_category; Type: TABLE DATA; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// INSERT INTO transaction_sub_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId") VALUES ('494802de-06d3-4dc1-8b8f-13211e753259', 'SUB - A', '2019-07-19', '9999-12-31', 'Selina', '2019-07-19 00:00:00', NULL, NULL, true, '56e455b0-db4d-4f1e-9e6b-d7064e4459b7');
// INSERT INTO transaction_sub_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId") VALUES ('b86e43a8-4e35-4af1-91d9-09ff08f6bb80', 'SUB - A', '2019-07-19', '9999-12-31', 'Selina', '2019-07-19 00:00:00', NULL, NULL, true, '947eb08a-efd0-402a-9523-bcc37bc142e2');
// INSERT INTO transaction_sub_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId") VALUES ('15ba013b-27bf-44ee-82e1-cce96950b91e', 'SUB - A', '2019-07-19', '9999-12-31', 'Selina', '2019-07-19 00:00:00', NULL, NULL, true, '24e2c531-95ac-4fad-bea8-f69033d3d919');
// INSERT INTO transaction_sub_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId") VALUES ('f3802f42-e1ce-473d-bb4d-0572e7f6a90c', 'SUB - B', '2019-07-19', '9999-12-31', 'Selina', '2019-07-19 00:00:00', NULL, NULL, true, '947eb08a-efd0-402a-9523-bcc37bc142e2');
// INSERT INTO transaction_sub_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId") VALUES ('3da4d2c6-4dc8-4d29-97e6-206cc5faba4c', 'Customer Validation', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '404f8ae3-27e1-458f-95b0-6cb4864af9e7');
// INSERT INTO transaction_sub_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId") VALUES ('692a26f8-5a02-4b8c-9852-ddac2cd0634c', 'Product Validation', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '404f8ae3-27e1-458f-95b0-6cb4864af9e7');
// INSERT INTO transaction_sub_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId") VALUES ('ac75bc13-c5bf-4f3c-88cc-b90b67d74669', 'Market Validation', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '404f8ae3-27e1-458f-95b0-6cb4864af9e7');
// INSERT INTO transaction_sub_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId") VALUES ('6a0a52c4-37e2-415d-aa3b-92814f2e92e3', 'Business Valuation', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '404f8ae3-27e1-458f-95b0-6cb4864af9e7');
// INSERT INTO transaction_sub_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId") VALUES ('1c92113e-0d0d-4068-b330-279c82653f0f', 'Rapat Internal', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '0dbf35b2-bfcb-43c2-a764-babea467615e');
// INSERT INTO transaction_sub_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId") VALUES ('8a52b988-de9a-4e46-b24a-8179f9c424f8', 'Rapat Vendor', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '0dbf35b2-bfcb-43c2-a764-babea467615e');
// INSERT INTO transaction_sub_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId") VALUES ('b8941b03-ccb9-4cb4-acb9-aad03b1f828d', 'Sewa Tempat', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, 'e4e58661-f585-450e-8e8c-b8b1ed4b743f');
// INSERT INTO transaction_sub_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId") VALUES ('10148e2d-88dd-4633-9d11-aa605d48dc7b', 'Customer Validation', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '81148bc9-d53d-4c92-a5be-1ca37286fbe7');
// INSERT INTO transaction_sub_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId") VALUES ('546b0015-ef53-4d34-ada5-369d8a28c7ab', 'Product Validation', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '81148bc9-d53d-4c92-a5be-1ca37286fbe7');
// INSERT INTO transaction_sub_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId") VALUES ('5f7d8ffb-e5bc-4166-8cf3-98208df0b197', 'Market Validation', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '81148bc9-d53d-4c92-a5be-1ca37286fbe7');
// INSERT INTO transaction_sub_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId") VALUES ('4d823b18-f32b-439f-adad-226fbb222e82', 'Business Validation', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '81148bc9-d53d-4c92-a5be-1ca37286fbe7');
// INSERT INTO transaction_sub_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId") VALUES ('5acb31b5-a3c4-4e67-8623-0e9ea804a4a1', 'SUB AMA', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, 'ce6bf152-8f41-486c-afbd-b2d1195466dd');
// INSERT INTO transaction_sub_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId") VALUES ('f39858df-001d-44cc-95d7-88c6a27b1019', 'Founders (Telkom employee)', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '7293dfa3-fbb9-4570-8ca0-72fd0c396b30');
// INSERT INTO transaction_sub_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId") VALUES ('71b58ce7-d8d0-40ca-9bd4-863e81b938c9', 'Non-founders (Telkom employee)', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '7293dfa3-fbb9-4570-8ca0-72fd0c396b30');
// INSERT INTO transaction_sub_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId") VALUES ('12abe2ae-cf02-4001-9d5e-19780740c452', 'Staffs Non-employee', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '7293dfa3-fbb9-4570-8ca0-72fd0c396b30');
// INSERT INTO transaction_sub_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId") VALUES ('26381404-e728-46f9-8acd-f7af1d22a5d4', 'Others', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '7293dfa3-fbb9-4570-8ca0-72fd0c396b30');
// INSERT INTO transaction_sub_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId") VALUES ('842704a7-fc30-4054-b5b0-dd29a515ed6d', 'Research & Validation', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '7e7f7f47-add7-476b-8dc3-f80cb0693c79');
// INSERT INTO transaction_sub_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId") VALUES ('e5d16a71-9395-481f-bf47-ac076d9a097f', 'Typical Marketing', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '7e7f7f47-add7-476b-8dc3-f80cb0693c79');
// INSERT INTO transaction_sub_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId") VALUES ('d74cf189-3ab6-4378-b031-700f29f542fa', 'Digital Marketing', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '7e7f7f47-add7-476b-8dc3-f80cb0693c79');
// INSERT INTO transaction_sub_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId") VALUES ('101b5bef-93ca-4f0d-83e5-0c51e9bcbc24', 'Events & Activities', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '7e7f7f47-add7-476b-8dc3-f80cb0693c79');
// INSERT INTO transaction_sub_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId") VALUES ('6ecf86a4-756d-43b1-aff6-6976a0593db3', 'Others', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '7e7f7f47-add7-476b-8dc3-f80cb0693c79');
// INSERT INTO transaction_sub_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId") VALUES ('0d40be97-9d43-4fd1-9372-61e826c6b2ca', 'Working Space & Facilities', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, 'abe13a68-f719-4dbd-8c6c-ddb89dd031d8');
// INSERT INTO transaction_sub_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId") VALUES ('1337b430-dae3-4572-ac71-d0b178c01a22', 'Working Tools', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, 'abe13a68-f719-4dbd-8c6c-ddb89dd031d8');
// INSERT INTO transaction_sub_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId") VALUES ('10de580b-a6b6-438a-8099-26a6774c6160', 'Utilities & Amenities', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, 'abe13a68-f719-4dbd-8c6c-ddb89dd031d8');
// INSERT INTO transaction_sub_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId") VALUES ('729f5e0b-4f4c-4811-9968-f4db41a14ed3', 'Administration', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, 'abe13a68-f719-4dbd-8c6c-ddb89dd031d8');
// INSERT INTO transaction_sub_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId") VALUES ('a595e8ce-c194-4dc0-8a3c-2b05036d58c1', 'Others', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, 'abe13a68-f719-4dbd-8c6c-ddb89dd031d8');
// INSERT INTO transaction_sub_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId") VALUES ('60fa284d-ff54-498d-a94e-651c38d5f611', 'Product Development (non-assets)', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '89252ec9-a9f5-4b3a-895b-ee7250c20a77');
// INSERT INTO transaction_sub_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId") VALUES ('b40768ee-aafa-498c-a6b9-597fa4a48401', 'Short-term update & upgrade', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '89252ec9-a9f5-4b3a-895b-ee7250c20a77');
// INSERT INTO transaction_sub_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId") VALUES ('d0d49294-76e1-4487-b783-429fc07bdf2e', 'Product Operation', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '89252ec9-a9f5-4b3a-895b-ee7250c20a77');
// INSERT INTO transaction_sub_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId") VALUES ('79009b03-2a96-41f4-9680-7af972bf2491', 'Others', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '89252ec9-a9f5-4b3a-895b-ee7250c20a77');
// INSERT INTO transaction_sub_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId") VALUES ('3352b9a8-49be-43ba-997d-42136587fd06', 'Interest Income', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '65071cde-0ad8-4042-b58a-9e583b3d029e');
// INSERT INTO transaction_sub_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId") VALUES ('ae19ca0b-32dd-4f39-b228-a288e925bf3a', 'Tax Payment', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '65071cde-0ad8-4042-b58a-9e583b3d029e');
// INSERT INTO transaction_sub_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId") VALUES ('8fd95321-f83b-473d-8203-604706208ade', 'Approval', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '306c20e2-1d45-450d-90e2-a6c005fca7f4');
// INSERT INTO transaction_sub_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId") VALUES ('dc679089-6026-4fd8-b5e6-e3b852c17549', 'Payment', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '306c20e2-1d45-450d-90e2-a6c005fca7f4');
// INSERT INTO transaction_sub_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId") VALUES ('d5ff1d19-8baa-47ba-9a73-5c0549ac5c54', 'Return', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '306c20e2-1d45-450d-90e2-a6c005fca7f4');
// INSERT INTO transaction_sub_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId") VALUES ('1e26c06c-9437-44ad-bf03-73d58c419eff', 'Cancellation', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '306c20e2-1d45-450d-90e2-a6c005fca7f4');
// INSERT INTO transaction_sub_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId") VALUES ('1f97d1fe-5a83-48ab-b226-9fb061de91bc', 'Fixed Asset', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, 'c39e2c2c-e689-4dac-b81b-ba3697b487bc');
// INSERT INTO transaction_sub_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId") VALUES ('1e1c488d-2272-4bf5-9468-89f03ca50594', 'License', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, 'c39e2c2c-e689-4dac-b81b-ba3697b487bc');
// INSERT INTO transaction_sub_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId") VALUES ('6318381e-f3c1-49bf-9cb3-38150f1ef385', 'Witholding Tax', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, 'bff18b96-6ba6-41bc-bd10-3a052f1f8d4c');
// INSERT INTO transaction_sub_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId") VALUES ('4c618169-89c7-47cc-87be-f22133768910', 'VAT', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, 'bff18b96-6ba6-41bc-bd10-3a052f1f8d4c');
// INSERT INTO transaction_sub_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId") VALUES ('ca0d0d5d-8625-47e9-b9cb-1f41f6ad420b', 'Insurance', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, 'bff18b96-6ba6-41bc-bd10-3a052f1f8d4c');
// INSERT INTO transaction_sub_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId") VALUES ('cbb9c8ab-d8f0-4501-ba9e-1212620d097a', 'Rental', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, 'bff18b96-6ba6-41bc-bd10-3a052f1f8d4c');
// INSERT INTO transaction_sub_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId") VALUES ('247e4b0b-2abf-4a37-944d-2ac5dc250d98', 'Equipment Cost', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '5ac47537-3993-44d3-8861-d49ce2ff6377');
// INSERT INTO transaction_sub_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId") VALUES ('fe072109-3516-435c-bf59-7174be8c33e7', 'Service', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '5ac47537-3993-44d3-8861-d49ce2ff6377');
// INSERT INTO transaction_sub_category (id, name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId") VALUES ('954df553-38bc-4ce2-bf60-c4b24bd10bb3', 'Others', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '5ac47537-3993-44d3-8861-d49ce2ff6377');


// --
// -- TOC entry 2327 (class 0 OID 49386)
// -- Dependencies: 190
// -- Data for Name: transaction_type; Type: TABLE DATA; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('47fd6508-0c3a-403c-90bf-093794c308e7', 'TRANS - AAA', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, '56e455b0-db4d-4f1e-9e6b-d7064e4459b7', '494802de-06d3-4dc1-8b8f-13211e753259');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('e65b6851-036b-48e2-a0a3-30e517c71960', 'TRANS - BAA', '2019-07-24', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '947eb08a-efd0-402a-9523-bcc37bc142e2', 'b86e43a8-4e35-4af1-91d9-09ff08f6bb80');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('2f82de68-94f5-455f-844c-9b19577e1fd4', 'TRANS - BAB', '2019-07-24', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '947eb08a-efd0-402a-9523-bcc37bc142e2', 'b86e43a8-4e35-4af1-91d9-09ff08f6bb80');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('7f5ca406-0422-4c5c-8e1b-b443e093ee2c', 'TRANS - BAC', '2019-07-24', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '947eb08a-efd0-402a-9523-bcc37bc142e2', 'b86e43a8-4e35-4af1-91d9-09ff08f6bb80');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('32d70d96-48fe-46e2-b2f3-b020f1fe60b2', 'TRANS - CAC', '2019-07-24', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '24e2c531-95ac-4fad-bea8-f69033d3d919', '15ba013b-27bf-44ee-82e1-cce96950b91e');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('d40ae033-176e-4c08-aa0e-0407d91f2a8a', 'TRANS - BBA', '2019-07-24', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '947eb08a-efd0-402a-9523-bcc37bc142e2', 'f3802f42-e1ce-473d-bb4d-0572e7f6a90c');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('c3170610-a3c3-4957-8862-f7c1b7e9f226', 'Persetujuan Dana', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '404f8ae3-27e1-458f-95b0-6cb4864af9e7', '3da4d2c6-4dc8-4d29-97e6-206cc5faba4c');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('56dd1306-3055-4574-b236-53c9121f276a', 'Penerimaan Dana', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '404f8ae3-27e1-458f-95b0-6cb4864af9e7', '3da4d2c6-4dc8-4d29-97e6-206cc5faba4c');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('fcdb1020-51ca-4b8a-9f8b-8a9a8e491b8e', 'Persetujuan Dana', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '404f8ae3-27e1-458f-95b0-6cb4864af9e7', '692a26f8-5a02-4b8c-9852-ddac2cd0634c');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('415a78e4-b078-4845-9531-fba08ed915da', 'Penerimaan Dana', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '404f8ae3-27e1-458f-95b0-6cb4864af9e7', '692a26f8-5a02-4b8c-9852-ddac2cd0634c');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('95c7d3a0-b1e6-4a3e-9197-ff9cecc2c989', 'Pesetujuan Dana', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '404f8ae3-27e1-458f-95b0-6cb4864af9e7', 'ac75bc13-c5bf-4f3c-88cc-b90b67d74669');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('00dc574d-d9db-44b8-980d-7d7673b8e28f', 'Penerimaan Dana', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '404f8ae3-27e1-458f-95b0-6cb4864af9e7', 'ac75bc13-c5bf-4f3c-88cc-b90b67d74669');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('8f362192-07d3-4e9e-af1f-72c18018ec05', 'Pesetujuan Dana', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '404f8ae3-27e1-458f-95b0-6cb4864af9e7', '6a0a52c4-37e2-415d-aa3b-92814f2e92e3');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('90e30af8-a24b-4eb8-a1a6-d94c9453a654', 'Penerimaan Dana', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '404f8ae3-27e1-458f-95b0-6cb4864af9e7', '6a0a52c4-37e2-415d-aa3b-92814f2e92e3');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('23801539-b2c4-4fa7-a8a5-2adb6ebcf662', 'Konsumsi', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '0dbf35b2-bfcb-43c2-a764-babea467615e', '1c92113e-0d0d-4068-b330-279c82653f0f');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('38f3e46d-11f9-4e47-b8c3-6b22b4094a0c', 'Transportasi', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '0dbf35b2-bfcb-43c2-a764-babea467615e', '1c92113e-0d0d-4068-b330-279c82653f0f');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('0b39ba23-4812-4507-b649-efc72bddb705', 'Logistik', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '0dbf35b2-bfcb-43c2-a764-babea467615e', '1c92113e-0d0d-4068-b330-279c82653f0f');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('4d24b114-2ca1-4442-aeab-87129b4c5f9d', 'Konsumsi', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '0dbf35b2-bfcb-43c2-a764-babea467615e', '8a52b988-de9a-4e46-b24a-8179f9c424f8');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('e42248fc-4b9b-428c-85be-244d5e049fed', 'Logistik', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '0dbf35b2-bfcb-43c2-a764-babea467615e', '8a52b988-de9a-4e46-b24a-8179f9c424f8');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('65bfca98-0a4e-4c02-955b-3f3ce230b63f', 'Transportasi', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, '0dbf35b2-bfcb-43c2-a764-babea467615e', '8a52b988-de9a-4e46-b24a-8179f9c424f8');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('3a4d07d4-7baa-4dd6-b8d6-a7a328f7629e', 'Coworking space', '2019-07-25', '9999-12-31', 'Selina', '2019-07-25 00:00:00', NULL, NULL, true, 'e4e58661-f585-450e-8e8c-b8b1ed4b743f', 'b8941b03-ccb9-4cb4-acb9-aad03b1f828d');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('7fc3cf0b-9e5a-47d1-a25f-61e4b7937229', 'Pesetujuan Dana', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '81148bc9-d53d-4c92-a5be-1ca37286fbe7', '10148e2d-88dd-4633-9d11-aa605d48dc7b');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('a54f1379-2eb9-4823-8a17-c66b59a4c1fc', 'Penerimaan Dana', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '81148bc9-d53d-4c92-a5be-1ca37286fbe7', '10148e2d-88dd-4633-9d11-aa605d48dc7b');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('b8f65975-da27-49eb-9a15-883e7fa47402', 'Penerimaan Dana', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '81148bc9-d53d-4c92-a5be-1ca37286fbe7', '546b0015-ef53-4d34-ada5-369d8a28c7ab');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('0ebe0311-655c-41d0-b249-7990ea41ed69', 'Pesetujuan Dana', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '81148bc9-d53d-4c92-a5be-1ca37286fbe7', '546b0015-ef53-4d34-ada5-369d8a28c7ab');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('7f188e2a-f367-4d1a-b521-36c98b5d23e4', 'Pesetujuan Dana', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '81148bc9-d53d-4c92-a5be-1ca37286fbe7', '5f7d8ffb-e5bc-4166-8cf3-98208df0b197');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('92f2bcce-e255-43e2-9666-5d7b055a7a55', 'Penerimaan Dana', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '81148bc9-d53d-4c92-a5be-1ca37286fbe7', '5f7d8ffb-e5bc-4166-8cf3-98208df0b197');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('bc5db403-ed68-4103-892d-90f63f766006', 'Penerimaan Dana', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '81148bc9-d53d-4c92-a5be-1ca37286fbe7', '4d823b18-f32b-439f-adad-226fbb222e82');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('fa0e8408-ff5d-4d12-b431-9f4e01306b91', 'Persetujuan Dana', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '81148bc9-d53d-4c92-a5be-1ca37286fbe7', '4d823b18-f32b-439f-adad-226fbb222e82');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('4e4241ff-c5ac-4d48-8fc7-c7fff0de0a82', 'Type AMA', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, 'ce6bf152-8f41-486c-afbd-b2d1195466dd', '5acb31b5-a3c4-4e67-8623-0e9ea804a4a1');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('b8e54155-ff31-4a6d-92ed-1bb61fedb2b9', 'Payable Accrual', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, '7293dfa3-fbb9-4570-8ca0-72fd0c396b30', 'f39858df-001d-44cc-95d7-88c6a27b1019');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('fd109fff-fb67-4626-92db-62be1dd2aa31', 'Payable Repayment', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, '7293dfa3-fbb9-4570-8ca0-72fd0c396b30', 'f39858df-001d-44cc-95d7-88c6a27b1019');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('d82f1993-7a5d-436f-a1b1-3a7f307817dd', 'Cash Payment', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, '7293dfa3-fbb9-4570-8ca0-72fd0c396b30', 'f39858df-001d-44cc-95d7-88c6a27b1019');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('e9b68e83-686c-40fb-8b4e-c216964ec73e', 'Payable Accrual', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, '7293dfa3-fbb9-4570-8ca0-72fd0c396b30', '71b58ce7-d8d0-40ca-9bd4-863e81b938c9');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('634ea27c-5d6e-4393-8e02-1db3ea68ff5f', 'Payable Repayment', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, '7293dfa3-fbb9-4570-8ca0-72fd0c396b30', '71b58ce7-d8d0-40ca-9bd4-863e81b938c9');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('6e67d0c5-1447-42e7-8e8b-b294e49f9b6f', 'Cash Payment', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, '7293dfa3-fbb9-4570-8ca0-72fd0c396b30', '71b58ce7-d8d0-40ca-9bd4-863e81b938c9');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('706917c7-5f86-4987-bfd2-8d766c13f637', 'Payable Accrual', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, '7293dfa3-fbb9-4570-8ca0-72fd0c396b30', '12abe2ae-cf02-4001-9d5e-19780740c452');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('52b4f439-d442-4bc4-ad42-c9f1c1bcdf52', 'Payable Repayment', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, '7293dfa3-fbb9-4570-8ca0-72fd0c396b30', '12abe2ae-cf02-4001-9d5e-19780740c452');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('9a35e4d1-6332-4704-bdc5-684c9c21bfb3', 'Cash Payment', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, '7293dfa3-fbb9-4570-8ca0-72fd0c396b30', '12abe2ae-cf02-4001-9d5e-19780740c452');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('f40e7b84-14b6-490c-be1a-483cff110a8b', 'Payable Accrual', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, '7293dfa3-fbb9-4570-8ca0-72fd0c396b30', '26381404-e728-46f9-8acd-f7af1d22a5d4');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('a76233f8-13e1-423a-be67-0e64113489c5', 'Payable Repayment', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, '7293dfa3-fbb9-4570-8ca0-72fd0c396b30', '26381404-e728-46f9-8acd-f7af1d22a5d4');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('f7efdf29-3abb-401a-bbcc-5fbf0bd77738', 'Cash Payment', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, '7293dfa3-fbb9-4570-8ca0-72fd0c396b30', '26381404-e728-46f9-8acd-f7af1d22a5d4');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('d014f6d8-2e76-4e0f-9989-7a00060f1af0', 'Payable Accrual', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, '7e7f7f47-add7-476b-8dc3-f80cb0693c79', '842704a7-fc30-4054-b5b0-dd29a515ed6d');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('705e30ad-abf8-4f55-9496-f8d5e91cc83a', 'Payable Repayment', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, '7e7f7f47-add7-476b-8dc3-f80cb0693c79', '842704a7-fc30-4054-b5b0-dd29a515ed6d');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('f4c0e71f-5b98-46ea-a47b-67d97832f562', 'Cash Payment', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, '7e7f7f47-add7-476b-8dc3-f80cb0693c79', '842704a7-fc30-4054-b5b0-dd29a515ed6d');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('e2f821c5-7635-4097-911c-e51b1c3a3d1b', 'Payable Accrual', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, '7e7f7f47-add7-476b-8dc3-f80cb0693c79', 'e5d16a71-9395-481f-bf47-ac076d9a097f');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('d2e6c10d-b591-4525-b9af-e3415fba6a9f', 'Payable Repayment', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, '7e7f7f47-add7-476b-8dc3-f80cb0693c79', 'e5d16a71-9395-481f-bf47-ac076d9a097f');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('b3ea6d4f-08e4-4c4e-8c41-2001ccf2606b', 'Cash Payment', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, '7e7f7f47-add7-476b-8dc3-f80cb0693c79', 'e5d16a71-9395-481f-bf47-ac076d9a097f');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('7975b388-8039-4064-b8c4-b34b11b93e5e', 'Payable Accrual', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, '7e7f7f47-add7-476b-8dc3-f80cb0693c79', 'd74cf189-3ab6-4378-b031-700f29f542fa');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('53f4fdfd-e76a-4b47-87c4-f92cf02f19a7', 'Payable Repayment', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, '7e7f7f47-add7-476b-8dc3-f80cb0693c79', 'd74cf189-3ab6-4378-b031-700f29f542fa');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('79d7037d-2a6e-4d82-b6b2-b3f725de1f38', 'Cash Payment', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, '7e7f7f47-add7-476b-8dc3-f80cb0693c79', 'd74cf189-3ab6-4378-b031-700f29f542fa');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('407b9c55-1cd0-4e24-88b7-ba6238b7e1e5', 'Payable Accrual', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, '7e7f7f47-add7-476b-8dc3-f80cb0693c79', '101b5bef-93ca-4f0d-83e5-0c51e9bcbc24');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('99e81a78-d13d-4835-bbeb-acb27bad7ba1', 'Payable Repayment', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, '7e7f7f47-add7-476b-8dc3-f80cb0693c79', '101b5bef-93ca-4f0d-83e5-0c51e9bcbc24');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('af36fb45-1efe-42d3-8c6e-5f38a0a872ae', 'Cash Payment', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, '7e7f7f47-add7-476b-8dc3-f80cb0693c79', '101b5bef-93ca-4f0d-83e5-0c51e9bcbc24');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('f6d7ca98-8a26-4d63-8703-f61936883353', 'Payable Accrual', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, '7e7f7f47-add7-476b-8dc3-f80cb0693c79', '6ecf86a4-756d-43b1-aff6-6976a0593db3');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('006a7d4a-fe36-40d9-b4ca-e7142c0a567a', 'Payable Repayment', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, '7e7f7f47-add7-476b-8dc3-f80cb0693c79', '6ecf86a4-756d-43b1-aff6-6976a0593db3');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('653b5b25-709d-493d-b0a7-e157ee5c9889', 'Cash Payment', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, '7e7f7f47-add7-476b-8dc3-f80cb0693c79', '6ecf86a4-756d-43b1-aff6-6976a0593db3');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('8b5df527-cec5-41ec-b967-8ec064f592e1', 'Payable Accrual', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, 'abe13a68-f719-4dbd-8c6c-ddb89dd031d8', '0d40be97-9d43-4fd1-9372-61e826c6b2ca');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('cd998f95-dc8f-4b9a-af8d-d5df22f569a0', 'Payable Repayment', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, 'abe13a68-f719-4dbd-8c6c-ddb89dd031d8', '0d40be97-9d43-4fd1-9372-61e826c6b2ca');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('cf3b6ab7-cd04-46d7-a68a-01350848179c', 'Cash Payment', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, 'abe13a68-f719-4dbd-8c6c-ddb89dd031d8', '0d40be97-9d43-4fd1-9372-61e826c6b2ca');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('a40fa8d8-c486-4f13-a5fa-2ea752608622', 'Payable Accrual', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, 'abe13a68-f719-4dbd-8c6c-ddb89dd031d8', '1337b430-dae3-4572-ac71-d0b178c01a22');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('f441d708-da0f-43e8-9c6d-857f95981da9', 'Payable Repayment', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, 'abe13a68-f719-4dbd-8c6c-ddb89dd031d8', '1337b430-dae3-4572-ac71-d0b178c01a22');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('e8819427-46da-43e1-8af7-e554aedbd2db', 'Cash Payment', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, 'abe13a68-f719-4dbd-8c6c-ddb89dd031d8', '1337b430-dae3-4572-ac71-d0b178c01a22');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('12c250ff-3cf1-426b-85b4-e974be2903e0', 'Payable Accrual', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, 'abe13a68-f719-4dbd-8c6c-ddb89dd031d8', '10de580b-a6b6-438a-8099-26a6774c6160');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('9ef1e7c6-15b0-485c-ba4c-667a6bb4c824', 'Payable Repayment', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, 'abe13a68-f719-4dbd-8c6c-ddb89dd031d8', '10de580b-a6b6-438a-8099-26a6774c6160');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('c3b2d4fe-574b-44ef-8d08-5cac567b8f8e', 'Cash Payment', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, 'abe13a68-f719-4dbd-8c6c-ddb89dd031d8', '10de580b-a6b6-438a-8099-26a6774c6160');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('29320baa-0fc0-463c-a5c3-39379cd97ac8', 'Payable Accrual', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, 'abe13a68-f719-4dbd-8c6c-ddb89dd031d8', '729f5e0b-4f4c-4811-9968-f4db41a14ed3');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('46d28213-475b-48d3-8463-d6d6aa07bdd6', 'Payable Repayment', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, 'abe13a68-f719-4dbd-8c6c-ddb89dd031d8', '729f5e0b-4f4c-4811-9968-f4db41a14ed3');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('3cfd0c11-89ad-4566-8e5b-35fe9b36678e', 'Cash Payment', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, 'abe13a68-f719-4dbd-8c6c-ddb89dd031d8', '729f5e0b-4f4c-4811-9968-f4db41a14ed3');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('d21d9e99-2169-4b90-a289-64ed8f4996b4', 'Payable Accrual', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, 'abe13a68-f719-4dbd-8c6c-ddb89dd031d8', 'a595e8ce-c194-4dc0-8a3c-2b05036d58c1');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('23d9493f-1c23-4d3e-910d-38212e566f85', 'Payable Repayment', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, 'abe13a68-f719-4dbd-8c6c-ddb89dd031d8', 'a595e8ce-c194-4dc0-8a3c-2b05036d58c1');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('adf2cab9-4721-4fee-bd39-2b6e64354e15', 'Cash Payment', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, 'abe13a68-f719-4dbd-8c6c-ddb89dd031d8', 'a595e8ce-c194-4dc0-8a3c-2b05036d58c1');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('902dd7c0-12bf-4a77-b2fd-0b0204e838fc', 'Payable Accrual', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, '89252ec9-a9f5-4b3a-895b-ee7250c20a77', '60fa284d-ff54-498d-a94e-651c38d5f611');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('0f5434f6-f7cf-460e-90a9-7644c2feedf0', 'Payable Repayment', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, '89252ec9-a9f5-4b3a-895b-ee7250c20a77', '60fa284d-ff54-498d-a94e-651c38d5f611');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('6119b4bc-2bed-42b7-9f61-fc7840e1a4fa', 'Cash Payment', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, '89252ec9-a9f5-4b3a-895b-ee7250c20a77', '60fa284d-ff54-498d-a94e-651c38d5f611');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('aea66db5-86c3-486f-b53f-5b80ed560d5e', 'Payable Accrual', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, '89252ec9-a9f5-4b3a-895b-ee7250c20a77', 'b40768ee-aafa-498c-a6b9-597fa4a48401');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('d43a27c2-6d54-44a7-b986-4a3e95dbca33', 'Payable Repayment', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, '89252ec9-a9f5-4b3a-895b-ee7250c20a77', 'b40768ee-aafa-498c-a6b9-597fa4a48401');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('12c69b92-5cca-4106-b6d9-80e2493276b8', 'Cash Payment', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, '89252ec9-a9f5-4b3a-895b-ee7250c20a77', 'b40768ee-aafa-498c-a6b9-597fa4a48401');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('f35f33f7-b45d-46ec-a2f0-4fcbe08004ba', 'Payable Accrual', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, '89252ec9-a9f5-4b3a-895b-ee7250c20a77', 'd0d49294-76e1-4487-b783-429fc07bdf2e');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('c015d963-409c-48dd-b647-017fb13364a9', 'Payable Repayment', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, '89252ec9-a9f5-4b3a-895b-ee7250c20a77', 'd0d49294-76e1-4487-b783-429fc07bdf2e');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('8f50c752-9aef-4f22-8a91-24e690375070', 'Cash Payment', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, '89252ec9-a9f5-4b3a-895b-ee7250c20a77', 'd0d49294-76e1-4487-b783-429fc07bdf2e');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('845abfd5-8d8c-440f-bd4d-4c65e68e4941', 'Payable Accrual', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, '89252ec9-a9f5-4b3a-895b-ee7250c20a77', '79009b03-2a96-41f4-9680-7af972bf2491');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('af0bfeee-1bdb-454e-9f38-ce7563acb4b5', 'Payable Repayment', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, '89252ec9-a9f5-4b3a-895b-ee7250c20a77', '79009b03-2a96-41f4-9680-7af972bf2491');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('e32b8f92-ed54-49bf-a955-772bffb01ca8', 'Cash Payment', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, '89252ec9-a9f5-4b3a-895b-ee7250c20a77', '79009b03-2a96-41f4-9680-7af972bf2491');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('e7a525d5-b94c-49bb-99f9-91e83758e462', 'Software', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '5ac47537-3993-44d3-8861-d49ce2ff6377', '247e4b0b-2abf-4a37-944d-2ac5dc250d98');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('5783eaac-5e7c-4390-aaa3-d596265dcc49', 'Hardware', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '5ac47537-3993-44d3-8861-d49ce2ff6377', '247e4b0b-2abf-4a37-944d-2ac5dc250d98');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('cd59c32c-db3c-44ee-ac55-8f3d2b4e9a46', 'Server', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '5ac47537-3993-44d3-8861-d49ce2ff6377', '247e4b0b-2abf-4a37-944d-2ac5dc250d98');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('dc1ff166-d40a-4490-b217-a94978c4e5f7', 'License', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '5ac47537-3993-44d3-8861-d49ce2ff6377', '247e4b0b-2abf-4a37-944d-2ac5dc250d98');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('e46e9349-4f69-447d-84ba-179c02f0e2a3', 'Professional Service', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '5ac47537-3993-44d3-8861-d49ce2ff6377', 'fe072109-3516-435c-bf59-7174be8c33e7');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('e25c67b3-a97a-493c-b8eb-14961b12adc5', 'Implementation', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '5ac47537-3993-44d3-8861-d49ce2ff6377', 'fe072109-3516-435c-bf59-7174be8c33e7');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('3c89f484-d498-4179-8612-14c7303a91ef', 'Fee Talent', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '5ac47537-3993-44d3-8861-d49ce2ff6377', 'fe072109-3516-435c-bf59-7174be8c33e7');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('10334955-3376-4129-87a2-3ab1d1b2695d', 'Accommodation', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '5ac47537-3993-44d3-8861-d49ce2ff6377', '954df553-38bc-4ce2-bf60-c4b24bd10bb3');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('64379372-b6b2-4431-a46e-9d161f9ea09e', 'Transportation', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '5ac47537-3993-44d3-8861-d49ce2ff6377', '954df553-38bc-4ce2-bf60-c4b24bd10bb3');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('a0bd3b3d-1260-4869-9fdc-14d728c3073c', 'Receipt', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '65071cde-0ad8-4042-b58a-9e583b3d029e', '3352b9a8-49be-43ba-997d-42136587fd06');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('a64a8999-2098-45bd-955d-6b62d4bc2a87', 'Payment', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '65071cde-0ad8-4042-b58a-9e583b3d029e', 'ae19ca0b-32dd-4f39-b228-a288e925bf3a');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('52a2f76d-5f1e-4d8f-9e26-1424cf0471b9', 'Amoeba Fund', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '306c20e2-1d45-450d-90e2-a6c005fca7f4', '8fd95321-f83b-473d-8203-604706208ade');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('c80b42a8-fe29-428d-970b-03676d936c1e', 'Telkom Fund', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '306c20e2-1d45-450d-90e2-a6c005fca7f4', '8fd95321-f83b-473d-8203-604706208ade');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('67fcd121-ce21-4794-8a12-f22974df7c13', 'External Fund', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '306c20e2-1d45-450d-90e2-a6c005fca7f4', '8fd95321-f83b-473d-8203-604706208ade');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('3f8c4c85-a776-4d7b-9294-316dea75a975', 'Amoeba Fund', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '306c20e2-1d45-450d-90e2-a6c005fca7f4', 'dc679089-6026-4fd8-b5e6-e3b852c17549');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('10feebba-787f-4aa1-b1a0-5181a8b4298b', 'Telkom Fund', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '306c20e2-1d45-450d-90e2-a6c005fca7f4', 'dc679089-6026-4fd8-b5e6-e3b852c17549');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('42354938-c2fc-4fac-8511-abef5b324dfc', 'External Fund', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '306c20e2-1d45-450d-90e2-a6c005fca7f4', 'dc679089-6026-4fd8-b5e6-e3b852c17549');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('1b767d0b-7d4a-452a-9195-321ccfa22b27', 'Amoeba Fund', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '306c20e2-1d45-450d-90e2-a6c005fca7f4', 'd5ff1d19-8baa-47ba-9a73-5c0549ac5c54');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('208d6028-6f9a-4bae-9973-6679d728b611', 'Telkom Fund', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '306c20e2-1d45-450d-90e2-a6c005fca7f4', 'd5ff1d19-8baa-47ba-9a73-5c0549ac5c54');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('df91ecef-de55-4337-8a1d-600c91baa9f9', 'External Fund', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '306c20e2-1d45-450d-90e2-a6c005fca7f4', 'd5ff1d19-8baa-47ba-9a73-5c0549ac5c54');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('f437b654-8083-4f15-b562-67aaab2ea9cf', 'Amoeba Fund', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '306c20e2-1d45-450d-90e2-a6c005fca7f4', '1e26c06c-9437-44ad-bf03-73d58c419eff');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('0fa89b03-aa7a-4573-86ae-2242f6d9a614', 'Telkom Fund', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '306c20e2-1d45-450d-90e2-a6c005fca7f4', '1e26c06c-9437-44ad-bf03-73d58c419eff');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('a53070f6-2ebb-443d-a7c1-e92600b54b34', 'External Fund', '2019-07-25', '9999-12-31', 'Selina', '2019-07-26 00:00:00', NULL, NULL, true, '306c20e2-1d45-450d-90e2-a6c005fca7f4', '1e26c06c-9437-44ad-bf03-73d58c419eff');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('2395bcd5-7301-4839-9a88-762ad68eafaa', 'Payable Accrual', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, 'c39e2c2c-e689-4dac-b81b-ba3697b487bc', '1f97d1fe-5a83-48ab-b226-9fb061de91bc');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('ad19134d-f3f0-4ad5-9710-6ecce192c152', 'Payable Repayment', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, 'c39e2c2c-e689-4dac-b81b-ba3697b487bc', '1f97d1fe-5a83-48ab-b226-9fb061de91bc');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('a7eef204-37c6-4586-960d-cc8855306f9d', 'Cash Payment', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, 'c39e2c2c-e689-4dac-b81b-ba3697b487bc', '1f97d1fe-5a83-48ab-b226-9fb061de91bc');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('2411b69f-e72f-4bed-ba19-ef81c4be8271', 'Payable Accrual', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, 'c39e2c2c-e689-4dac-b81b-ba3697b487bc', '1e1c488d-2272-4bf5-9468-89f03ca50594');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('46a74957-05a7-4b46-9764-f7cb30253310', 'Payable Repayment', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, 'c39e2c2c-e689-4dac-b81b-ba3697b487bc', '1e1c488d-2272-4bf5-9468-89f03ca50594');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('397b0b4c-87c5-49df-ad2a-6cf9ad07fd5d', 'Cash Payment', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, 'c39e2c2c-e689-4dac-b81b-ba3697b487bc', '1e1c488d-2272-4bf5-9468-89f03ca50594');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('4801bf19-0fa8-4ac3-912d-16ccb1dcc4e1', 'Invoice Issuance', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, 'd3a78c99-0e16-4276-8851-7c5e3bdf3fe7', NULL);
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('a25e8a3d-4b24-4b9b-ba96-f05bebe2cec0', 'Invoice Repayment', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, 'd3a78c99-0e16-4276-8851-7c5e3bdf3fe7', NULL);
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('a0a75da1-5ea8-4fa9-bdb9-e9249955abb5', 'Cash Receipt', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, 'd3a78c99-0e16-4276-8851-7c5e3bdf3fe7', NULL);
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('b16891b2-0882-464a-b933-6573d729fa21', 'Return', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, 'd3a78c99-0e16-4276-8851-7c5e3bdf3fe7', NULL);
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('52c4b727-c096-4a55-ab5c-c9b131c8cdb4', 'PPh Payment', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, 'bff18b96-6ba6-41bc-bd10-3a052f1f8d4c', '6318381e-f3c1-49bf-9cb3-38150f1ef385');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('26cd9804-f1b6-4e8c-825a-f4842f8190ed', 'PPN Invoice Receipt', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, 'bff18b96-6ba6-41bc-bd10-3a052f1f8d4c', '4c618169-89c7-47cc-87be-f22133768910');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('a0063b37-637e-4889-b699-1f8cdd8c56fb', 'Insurance', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, 'bff18b96-6ba6-41bc-bd10-3a052f1f8d4c', 'ca0d0d5d-8625-47e9-b9cb-1f41f6ad420b');
// INSERT INTO transaction_type ("transactionTypeId", name, "effectiveStartDate", "effectiveEndDate", "createdBy", "createdDate", "lastUpdatedBy", "lastUpdatedDate", "activeFlag", "transactioncategoryId", "transactionsubcategoryId") VALUES ('ab395ff3-8d0d-4e06-aec7-ed32d4c814f5', 'Rental', '2019-07-24', '9999-12-31', 'Selina', '2019-07-24 00:00:00', NULL, '2019-07-24 21:49:36.510282', true, 'bff18b96-6ba6-41bc-bd10-3a052f1f8d4c', 'cbb9c8ab-d8f0-4501-ba9e-1212620d097a');


// --
// -- TOC entry 2338 (class 0 OID 57471)
// -- Dependencies: 201
// -- Data for Name: transaction_type_account; Type: TABLE DATA; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --



// --
// -- TOC entry 2319 (class 0 OID 49302)
// -- Dependencies: 182
// -- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// INSERT INTO "user" ("userName", "firstName", "lastName", password, "isActive", email, "organizationId", id) VALUES ('priscilia', 'Amoeba', 'Management', 'e7cf3ef4f17c3999a94f2c6f612e8a888e5b1026878e4e19398b23bd38ec221a', true, 'priscilia@digitalamoeba.id', '3338c238-db22-411a-a312-41df704b722f', 'daf43273-cf5f-4eb3-9532-2f29b120ae50');
// INSERT INTO "user" ("userName", "firstName", "lastName", password, "isActive", email, "organizationId", id) VALUES ('arkademy', 'Arkademy', 'Amoeba', 'e7cf3ef4f17c3999a94f2c6f612e8a888e5b1026878e4e19398b23bd38ec221a', true, 'arkademy@mail.com', '32ae5278-bf84-4c93-9994-0550813844a3', '07744f3d-93fc-4697-991d-b900c1ccb418');


// --
// -- TOC entry 2168 (class 2606 OID 49428)
// -- Name: PK_056f7854a7afdba7cbd6d45fc20; Type: CONSTRAINT; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// ALTER TABLE ONLY company
//     ADD CONSTRAINT "PK_056f7854a7afdba7cbd6d45fc20" PRIMARY KEY (id);


// --
// -- TOC entry 2156 (class 2606 OID 49374)
// -- Name: PK_132ade34f8e70ef9868af12c17a; Type: CONSTRAINT; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// ALTER TABLE ONLY accounting_book
//     ADD CONSTRAINT "PK_132ade34f8e70ef9868af12c17a" PRIMARY KEY (id);


// --
// -- TOC entry 2182 (class 2606 OID 57478)
// -- Name: PK_2031ee6663637444dfe9596c6e7; Type: CONSTRAINT; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// ALTER TABLE ONLY transaction_type_account
//     ADD CONSTRAINT "PK_2031ee6663637444dfe9596c6e7" PRIMARY KEY (id);


// --
// -- TOC entry 2174 (class 2606 OID 49452)
// -- Name: PK_3cda65c731a6264f0e444cc9b91; Type: CONSTRAINT; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// ALTER TABLE ONLY currency
//     ADD CONSTRAINT "PK_3cda65c731a6264f0e444cc9b91" PRIMARY KEY (id);


// --
// -- TOC entry 2160 (class 2606 OID 49393)
// -- Name: PK_3e327c7548cfe033cf40fe843ee; Type: CONSTRAINT; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// ALTER TABLE ONLY transaction_type
//     ADD CONSTRAINT "PK_3e327c7548cfe033cf40fe843ee" PRIMARY KEY ("transactionTypeId");


// --
// -- TOC entry 2170 (class 2606 OID 49436)
// -- Name: PK_472c1f99a32def1b0abb219cd67; Type: CONSTRAINT; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// ALTER TABLE ONLY organization
//     ADD CONSTRAINT "PK_472c1f99a32def1b0abb219cd67" PRIMARY KEY (id);


// --
// -- TOC entry 2152 (class 2606 OID 49354)
// -- Name: PK_4d68b1358bb5b766d3e78f32f57; Type: CONSTRAINT; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// ALTER TABLE ONLY project
//     ADD CONSTRAINT "PK_4d68b1358bb5b766d3e78f32f57" PRIMARY KEY (id);


// --
// -- TOC entry 2180 (class 2606 OID 57470)
// -- Name: PK_54115ee388cdb6d86bb4bf5b2ea; Type: CONSTRAINT; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// ALTER TABLE ONLY account
//     ADD CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY (id);


// --
// -- TOC entry 2154 (class 2606 OID 49363)
// -- Name: PK_59cdd4fb42cfae5fdd630ca6adb; Type: CONSTRAINT; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// ALTER TABLE ONLY aj_header
//     ADD CONSTRAINT "PK_59cdd4fb42cfae5fdd630ca6adb" PRIMARY KEY ("headerId");


// --
// -- TOC entry 2176 (class 2606 OID 49541)
// -- Name: PK_6e63e9c8d4e98387a7434617264; Type: CONSTRAINT; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// ALTER TABLE ONLY transaction_code_temp
//     ADD CONSTRAINT "PK_6e63e9c8d4e98387a7434617264" PRIMARY KEY (id);


// --
// -- TOC entry 2146 (class 2606 OID 49321)
// -- Name: PK_814d737123e3a42d0a37e97b393; Type: CONSTRAINT; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// ALTER TABLE ONLY cost_center
//     ADD CONSTRAINT "PK_814d737123e3a42d0a37e97b393" PRIMARY KEY (id);


// --
// -- TOC entry 2164 (class 2606 OID 49412)
// -- Name: PK_96725ab4b4b2a8406fa1727532c; Type: CONSTRAINT; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// ALTER TABLE ONLY transaction_sub_category
//     ADD CONSTRAINT "PK_96725ab4b4b2a8406fa1727532c" PRIMARY KEY (id);


// --
// -- TOC entry 2148 (class 2606 OID 49332)
// -- Name: PK_a7a13f4cacb744524e44dfdad32; Type: CONSTRAINT; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// ALTER TABLE ONLY customer
//     ADD CONSTRAINT "PK_a7a13f4cacb744524e44dfdad32" PRIMARY KEY (id);


// --
// -- TOC entry 2166 (class 2606 OID 49420)
// -- Name: PK_abbe63b71ee4193f61c322ab497; Type: CONSTRAINT; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// ALTER TABLE ONLY transaction_category
//     ADD CONSTRAINT "PK_abbe63b71ee4193f61c322ab497" PRIMARY KEY (id);


// --
// -- TOC entry 2178 (class 2606 OID 57459)
// -- Name: PK_b864cb5d49854f89917fc0b44b9; Type: CONSTRAINT; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// ALTER TABLE ONLY evidence
//     ADD CONSTRAINT "PK_b864cb5d49854f89917fc0b44b9" PRIMARY KEY (id);


// --
// -- TOC entry 2150 (class 2606 OID 49343)
// -- Name: PK_bebc9158e480b949565b4dc7a82; Type: CONSTRAINT; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// ALTER TABLE ONLY product
//     ADD CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY (id);


// --
// -- TOC entry 2140 (class 2606 OID 57535)
// -- Name: PK_cace4a159ff9f2512dd42373760; Type: CONSTRAINT; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// ALTER TABLE ONLY "user"
//     ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY (id);


// --
// -- TOC entry 2158 (class 2606 OID 49385)
// -- Name: PK_d43068f423ec731832e87d633b5; Type: CONSTRAINT; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// ALTER TABLE ONLY aj_lines
//     ADD CONSTRAINT "PK_d43068f423ec731832e87d633b5" PRIMARY KEY ("lineId");


// --
// -- TOC entry 2172 (class 2606 OID 49444)
// -- Name: PK_ef62d06c5d19f54b2b3cf6f8c81; Type: CONSTRAINT; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// ALTER TABLE ONLY accounting_period
//     ADD CONSTRAINT "PK_ef62d06c5d19f54b2b3cf6f8c81" PRIMARY KEY (id);


// --
// -- TOC entry 2184 (class 2606 OID 65651)
// -- Name: PK_fe63760f4c814b033bc7c4b7365; Type: CONSTRAINT; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// ALTER TABLE ONLY posting_code_temp
//     ADD CONSTRAINT "PK_fe63760f4c814b033bc7c4b7365" PRIMARY KEY (id);


// --
// -- TOC entry 2162 (class 2606 OID 49404)
// -- Name: PK_feed526bfc8719fd6a021dbac2a; Type: CONSTRAINT; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// ALTER TABLE ONLY transaction_parameter
//     ADD CONSTRAINT "PK_feed526bfc8719fd6a021dbac2a" PRIMARY KEY (id);


// --
// -- TOC entry 2142 (class 2606 OID 57519)
// -- Name: UQ_da5934070b5f2726ebfd3122c80; Type: CONSTRAINT; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// ALTER TABLE ONLY "user"
//     ADD CONSTRAINT "UQ_da5934070b5f2726ebfd3122c80" UNIQUE ("userName");


// --
// -- TOC entry 2144 (class 2606 OID 57517)
// -- Name: UQ_e12875dfb3b1d92d7d7c5377e22; Type: CONSTRAINT; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// ALTER TABLE ONLY "user"
//     ADD CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE (email);


// --
// -- TOC entry 2189 (class 2606 OID 49468)
// -- Name: FK_0028dfadf312a1d7f51656c4a9a; Type: FK CONSTRAINT; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// ALTER TABLE ONLY project
//     ADD CONSTRAINT "FK_0028dfadf312a1d7f51656c4a9a" FOREIGN KEY ("organizationId") REFERENCES organization(id);


// --
// -- TOC entry 2193 (class 2606 OID 49488)
// -- Name: FK_0c7bc24b6d88613706a7144e2c7; Type: FK CONSTRAINT; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// ALTER TABLE ONLY aj_lines
//     ADD CONSTRAINT "FK_0c7bc24b6d88613706a7144e2c7" FOREIGN KEY ("transactiontypeId") REFERENCES transaction_type("transactionTypeId");


// --
// -- TOC entry 2197 (class 2606 OID 49508)
// -- Name: FK_1563ba499d725f87bc036441dfe; Type: FK CONSTRAINT; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// ALTER TABLE ONLY transaction_parameter
//     ADD CONSTRAINT "FK_1563ba499d725f87bc036441dfe" FOREIGN KEY ("transactioncategoryId") REFERENCES transaction_category(id);


// --
// -- TOC entry 2199 (class 2606 OID 49518)
// -- Name: FK_19dfb1f9d3bc5d81a5f7ac80939; Type: FK CONSTRAINT; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// ALTER TABLE ONLY transaction_sub_category
//     ADD CONSTRAINT "FK_19dfb1f9d3bc5d81a5f7ac80939" FOREIGN KEY ("transactioncategoryId") REFERENCES transaction_category(id);


// --
// -- TOC entry 2202 (class 2606 OID 57479)
// -- Name: FK_2a854099c01542898b6eadeeec4; Type: FK CONSTRAINT; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// ALTER TABLE ONLY evidence
//     ADD CONSTRAINT "FK_2a854099c01542898b6eadeeec4" FOREIGN KEY ("ajheaderHeaderId") REFERENCES aj_header("headerId");


// --
// -- TOC entry 2190 (class 2606 OID 49473)
// -- Name: FK_2f8011ac25b914bf7787f5f2883; Type: FK CONSTRAINT; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// ALTER TABLE ONLY aj_lines
//     ADD CONSTRAINT "FK_2f8011ac25b914bf7787f5f2883" FOREIGN KEY ("ajheaderHeaderId") REFERENCES aj_header("headerId");


// --
// -- TOC entry 2188 (class 2606 OID 49463)
// -- Name: FK_32a4bdd261ec81f4ca6b3abe262; Type: FK CONSTRAINT; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// ALTER TABLE ONLY product
//     ADD CONSTRAINT "FK_32a4bdd261ec81f4ca6b3abe262" FOREIGN KEY ("organizationId") REFERENCES organization(id);


// --
// -- TOC entry 2203 (class 2606 OID 57484)
// -- Name: FK_39c6a277b720fb34bf3a38b26a0; Type: FK CONSTRAINT; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// ALTER TABLE ONLY transaction_type_account
//     ADD CONSTRAINT "FK_39c6a277b720fb34bf3a38b26a0" FOREIGN KEY ("transactionTypeId") REFERENCES transaction_type("transactionTypeId");


// --
// -- TOC entry 2192 (class 2606 OID 49483)
// -- Name: FK_3e35b623c929711e3eb73c82777; Type: FK CONSTRAINT; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// ALTER TABLE ONLY aj_lines
//     ADD CONSTRAINT "FK_3e35b623c929711e3eb73c82777" FOREIGN KEY ("transactionsubcategoryId") REFERENCES transaction_sub_category(id);


// --
// -- TOC entry 2201 (class 2606 OID 49528)
// -- Name: FK_3eb12afc1d4c0426a0b06b372d3; Type: FK CONSTRAINT; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// ALTER TABLE ONLY organization
//     ADD CONSTRAINT "FK_3eb12afc1d4c0426a0b06b372d3" FOREIGN KEY ("companyId") REFERENCES company(id);


// --
// -- TOC entry 2196 (class 2606 OID 49503)
// -- Name: FK_431d2053e1529a90a348eff4b14; Type: FK CONSTRAINT; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// ALTER TABLE ONLY transaction_type
//     ADD CONSTRAINT "FK_431d2053e1529a90a348eff4b14" FOREIGN KEY ("transactionsubcategoryId") REFERENCES transaction_sub_category(id);

// --
// -- TOC entry 2187 (class 2606 OID 49458)
// -- Name: FK_6dd837492f09ba0c61324532fee; Type: FK CONSTRAINT; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// ALTER TABLE ONLY customer
//     ADD CONSTRAINT "FK_6dd837492f09ba0c61324532fee" FOREIGN KEY ("organizationId") REFERENCES organization(id);


// --
// -- TOC entry 2191 (class 2606 OID 49478)
// -- Name: FK_966703748643c55ce60001d1a25; Type: FK CONSTRAINT; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// ALTER TABLE ONLY aj_lines
//     ADD CONSTRAINT "FK_966703748643c55ce60001d1a25" FOREIGN KEY ("transactioncategoryId") REFERENCES transaction_category(id);


// --
// -- TOC entry 2195 (class 2606 OID 49498)
// -- Name: FK_ad4eef8e3cad7e3f10ed3049d25; Type: FK CONSTRAINT; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// ALTER TABLE ONLY transaction_type
//     ADD CONSTRAINT "FK_ad4eef8e3cad7e3f10ed3049d25" FOREIGN KEY ("transactioncategoryId") REFERENCES transaction_category(id);


// --
// -- TOC entry 2194 (class 2606 OID 49493)
// -- Name: FK_be1885251f8397c7bcd8dbd6bec; Type: FK CONSTRAINT; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// --
// -- TOC entry 2198 (class 2606 OID 49513)
// -- Name: FK_d6a64c36dc823e1597699dfa40c; Type: FK CONSTRAINT; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// ALTER TABLE ONLY transaction_parameter
//     ADD CONSTRAINT "FK_d6a64c36dc823e1597699dfa40c" FOREIGN KEY ("transactionsubcategoryId") REFERENCES transaction_sub_category(id);


// --
// -- TOC entry 2186 (class 2606 OID 49453)
// -- Name: FK_d7ba0f6c00427290b21a39fd8da; Type: FK CONSTRAINT; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// ALTER TABLE ONLY cost_center
//     ADD CONSTRAINT "FK_d7ba0f6c00427290b21a39fd8da" FOREIGN KEY ("organizationId") REFERENCES organization(id);


// --
// -- TOC entry 2185 (class 2606 OID 57520)
// -- Name: FK_dfda472c0af7812401e592b6a61; Type: FK CONSTRAINT; Schema: public; Owner: ${process.env.TYPEORM_USERNAME}
// --

// ALTER TABLE ONLY "user"
//     ADD CONSTRAINT "FK_dfda472c0af7812401e592b6a61" FOREIGN KEY ("organizationId") REFERENCES organization(id);


// --
// -- TOC entry 2346 (class 0 OID 0)
// -- Dependencies: 7
// -- Name: public; Type: ACL; Schema: -; Owner: ${process.env.TYPEORM_USERNAME}
// --

// REVOKE ALL ON SCHEMA public FROM PUBLIC;
// REVOKE ALL ON SCHEMA public FROM ${process.env.TYPEORM_USERNAME};
// GRANT ALL ON SCHEMA public TO ${process.env.TYPEORM_USERNAME};
// GRANT ALL ON SCHEMA public TO PUBLIC;


// -- Completed on 2019-07-30 14:55:35

// --
// -- database dump complete
// --`, (err: any, res: any) => {
//         // console.log(err, res);
//         if (err) {
//           console.log('err: ', err);
//           console.log('error creating master data, skip it...');
//         }
//         if (res) {
//           console.log('master data created');
//         }
//         client.end();
//       });
    });
    //   console.log(createQuery);
  }
  catch (error) {
    console.log(error); // "oh, no!"
  }
};

InjectSeed();
