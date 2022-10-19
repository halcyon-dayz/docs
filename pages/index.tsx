// nextjs index.tsx starter

import React from 'react';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {},
	};
};

const Index = () => {
	return <h1>Index</h1>;
};

export default Index;
