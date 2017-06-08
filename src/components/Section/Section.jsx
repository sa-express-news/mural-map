// @flow

import React, {Component} from 'react';

import Paragraph from '../Paragraph/Paragraph';
import FullWidthPhoto from '../FullWidthPhoto/FullWidthPhoto';
import PhotoCaption from '../PhotoCaption/PhotoCaption';
import PhotoCutline from '../PhotoCutline/PhotoCutline';


class Section extends Component {
	props: {
		data: Array<Object>
	};

	render(){
		const data = this.props.data;
		const components = data.map((object) =>{
			switch (object.type){
				case 'text':
					return <Paragraph text={object.value} />
				case 'photo':
					return <FullWidthPhoto src={object.value} alt=''/>
				case 'caption':
					return <PhotoCaption text={object.value} />
				case 'cutline':
					return <PhotoCutline text={object.value} />
				default:
					return null
			}
		});

		return(
			<div className='section'>
				{components}
			</div>
		)
	}
}

export default Section;