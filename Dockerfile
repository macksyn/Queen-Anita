FROM quay.io/sampandey001/secktor

RUN git clone https://github.com/macksyn/Queen_Anita-V2 /root/macksyn

# Clear npm cache and remove node_modules directories
RUN npm cache clean --force
RUN rm -rf /root/macksyn/node_modules

# Install dependencies
WORKDIR /root/macksyn
RUN npm install

# Add additional Steps To Run...
EXPOSE 3000
CMD ["npm","start" ]
