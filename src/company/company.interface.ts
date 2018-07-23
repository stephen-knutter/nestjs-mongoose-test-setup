import { Document } from 'mongoose';

export interface Company extends Document {
  name: string;
  permalink: string;
  crunchbase_url: string;
	homepage_url: string;
	blog_url: string;
	blog_feed_url: string;
	twitter_username: string;
	category_code: string;
	number_of_employees: number;
	founded_year: number;
	founded_month: number;
	founded_day: number;
	deadpooled_year: number;
	tag_list: string;
	alias_list: string;
	email_address: string;
	phone_number: string;
	description: string;
	created_at: Date; // ISODate("2007-05-25T06:51:27Z"),
  updated_at: string;
  overview: string;
  image: object;
  products: object[];
  relationships: object[];
  competions: object[];
  providerships: object[];
  total_money_raised: string;
  funding_rounds: object[];
  investments: object[];
  acquisition: object[];
  acquisitions: object[];
  offices: object[];
  milestones: object[];
  video_embeds: object[];
  screenshots: object[];
  external_links: object[];
  partners: object[];
}
